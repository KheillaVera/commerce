export default {
  // Use the node environment for backend testing
  testEnvironment: 'node',

  // Ensure mocks are cleared between tests (essential for auth/db tests)
  clearMocks: true,

  // Display individual test results
  verbose: true,

  // Ignore folders like node_modules
  testPathIgnorePatterns: ['/node_modules/'],

  // If you use 'dotenv' to manage secrets, you can load them here
  setupFiles: ['dotenv/config'],

  // Helpful for debugging slow e-commerce queries
  slowTestThreshold: 5
};