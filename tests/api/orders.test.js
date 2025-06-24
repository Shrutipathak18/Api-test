const request = require('supertest');
const express = require('express');
const orderRoutes = require('../../routes/orders');

const app = express();
app.use(express.json());
app.use('/api/orders', orderRoutes);

describe('Orders API', () => {
  it('GET /api/orders should return all orders', async () => {
    const res = await request(app).get('/api/orders');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/orders/1 should return order with id 1', async () => {
    const res = await request(app).get('/api/orders/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('GET /api/orders/999 should return 404', async () => {
    const res = await request(app).get('/api/orders/999');
    expect(res.statusCode).toBe(404);
  });

  it('POST /api/orders should create a new order', async () => {
    const res = await request(app)
      .post('/api/orders')
      .send({ userId: 1, productId: 2, quantity: 3 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('quantity', 3);
  });

  it('PUT /api/orders/1 should update order', async () => {
    const res = await request(app)
      .put('/api/orders/1')
      .send({ quantity: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('quantity', 5);
  });

  it('DELETE /api/orders/1 should delete order', async () => {
    const res = await request(app).delete('/api/orders/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });
}); 