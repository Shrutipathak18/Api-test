const request = require('supertest');
const express = require('express');
const { sequelize, testConnection } = require('../../config/database');

const app = express();
app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({
      status: 'OK',
      message: 'Shruti API Server is running!',
      timestamp: new Date().toISOString(),
      database: 'Connected'
    });
  } catch (error) {
    res.json({
      status: 'ERROR',
      message: 'Shruti API Server is running!',
      timestamp: new Date().toISOString(),
      database: 'Disconnected',
      error: error.message
    });
  }
});

describe('Health API', () => {
  it('GET /api/health should return status OK and database Connected', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'OK');
    expect(res.body).toHaveProperty('database', 'Connected');
  });
}); 