const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API Documentation',
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      orders: '/api/orders',
      categories: '/api/categories',
      health: '/api/health'
    }
  });
});

module.exports = router; 