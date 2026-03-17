// swagger.js
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop API",
      version: "1.0.0",
      description: "API documentation for the shop project",
    },
    servers: [
      { url: "http://localhost:5000" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {           // ← This name is used later in security: [...]
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",  // just informational
          description: "Enter JWT token obtained from /auth/login"
        }
      },
      // Optional: define common schemas here (User, TokenResponse, Error, etc.)
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            email: { type: "string", format: "email" },
            role: { type: "string", enum: ["user", "admin"] },
            createdAt: { type: "string", format: "date-time" }
          }
        },
        RegisterInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", minLength: 2 },
            email: { type: "string", format: "email" },
            password: { type: "string", format: "password", minLength: 6 }
          }
        },
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string", format: "password" }
          }
        },
        TokenResponse: {
          type: "object",
          properties: {
            token: { type: "string" },
            user: { $ref: "#/components/schemas/User" }
          }
        },
        ErrorResponse: {
          type: "object",
          properties: {
            message: { type: "string" }
          }
        }
      }
    }
  },
  apis: ["./routes/*.js", "./controllers/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };