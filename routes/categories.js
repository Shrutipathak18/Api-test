const express = require('express');
const router = express.Router();

let categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Books' }
];

// GET all categories
router.get('/', (req, res) => {
  res.json(categories);
});

// GET category by id
router.get('/:id', (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ error: 'Category not found' });
  res.json(category);
});

// POST create category
router.post('/', (req, res) => {
  const { name } = req.body;
  const newCategory = { id: categories.length + 1, name };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// PUT update category
router.put('/:id', (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ error: 'Category not found' });
  category.name = req.body.name || category.name;
  res.json(category);
});

// DELETE category
router.delete('/:id', (req, res) => {
  const index = categories.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Category not found' });
  const deleted = categories.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router; 