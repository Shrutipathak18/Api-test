const request = require('supertest');
const express = require('express');
const categoryRoutes = require('../../routes/categories');

const app = express();
app.use(express.json());
app.use('/api/categories', categoryRoutes);

describe('Categories API', () => {
  it('GET /api/categories should return all categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/categories/1 should return category with id 1', async () => {
    const res = await request(app).get('/api/categories/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('GET /api/categories/999 should return 404', async () => {
    const res = await request(app).get('/api/categories/999');
    expect(res.statusCode).toBe(404);
  });

  it('POST /api/categories should create a new category', async () => {
    const res = await request(app)
      .post('/api/categories')
      .send({ name: 'Clothing' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'Clothing');
  });

  it('PUT /api/categories/1 should update category', async () => {
    const res = await request(app)
      .put('/api/categories/1')
      .send({ name: 'Electronics Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Electronics Updated');
  });

  it('DELETE /api/categories/1 should delete category', async () => {
    const res = await request(app).delete('/api/categories/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });
}); 