const request = require('supertest');
const express = require('express');
const userRoutes = require('../../routes/users');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

describe('Users API', () => {
  it('GET /api/users should return all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/users/1 should return user with id 1', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('GET /api/users/999 should return 404', async () => {
    const res = await request(app).get('/api/users/999');
    expect(res.statusCode).toBe(404);
  });

  it('POST /api/users should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Charlie', email: 'charlie@example.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'Charlie');
  });

  it('PUT /api/users/1 should update user', async () => {
    const res = await request(app)
      .put('/api/users/1')
      .send({ name: 'Alice Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Alice Updated');
  });

  it('DELETE /api/users/1 should delete user', async () => {
    const res = await request(app).delete('/api/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });
}); 