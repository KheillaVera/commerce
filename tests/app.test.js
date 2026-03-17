import request from 'supertest';
// Import your express app. Note: You might need to export 'app' from index.js
// If your server starts automatically in index.js, you might need a separate app.js
import app from '../index.js'; 

describe('GET /', () => {
  it('should return 200 OK from the home route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});