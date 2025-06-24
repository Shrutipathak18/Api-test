const express = require('express');
const router = express.Router();

let orders = [
  { id: 1, userId: 1, productId: 2, quantity: 1 },
  { id: 2, userId: 2, productId: 1, quantity: 2 }
];

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// GET order by id
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// POST create order
router.post('/', (req, res) => {
  const { userId, productId, quantity } = req.body;
  const newOrder = { id: orders.length + 1, userId, productId, quantity };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// PUT update order
router.put('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });
  order.userId = req.body.userId || order.userId;
  order.productId = req.body.productId || order.productId;
  order.quantity = req.body.quantity || order.quantity;
  res.json(order);
});

// DELETE order
router.delete('/:id', (req, res) => {
  const index = orders.findIndex(o => o.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Order not found' });
  const deleted = orders.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router; 