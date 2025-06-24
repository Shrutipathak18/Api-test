const request = require('supertest');
const express = require('express');
const productRoutes = require('../../routes/products');

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

describe('Products API', () => {
  it('GET /api/products should return all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/products/1 should return product with id 1', async () => {
    const res = await request(app).get('/api/products/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('GET /api/products/999 should return 404', async () => {
    const res = await request(app).get('/api/products/999');
    expect(res.statusCode).toBe(404);
  });

  it('POST /api/products should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Tablet', price: 300 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'Tablet');
  });

  it('PUT /api/products/1 should update product', async () => {
    const res = await request(app)
      .put('/api/products/1')
      .send({ name: 'Laptop Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Laptop Updated');
  });

  it('DELETE /api/products/1 should delete product', async () => {
    const res = await request(app).delete('/api/products/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });
}); 