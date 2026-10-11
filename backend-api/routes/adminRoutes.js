const express = require('express');
const router = express.Router();

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  return res.json({
    success: true,
    token: 'sample-admin-token',
    user: {
      id: 'admin-1',
      email,
      role: 'admin',
      name: 'Main Admin'
    }
  });
});

router.get('/posts', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'p1',
        title: 'Admin Post',
        category: 'politics',
        language: 'bn',
        status: 'draft'
      }
    ]
  });
});

router.post('/posts', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: req.body
  });
});

router.put('/posts/:id', (req, res) => {
  res.json({
    success: true,
    message: 'Post updated successfully',
    id: req.params.id
  });
});

router.delete('/posts/:id', (req, res) => {
  res.json({
    success: true,
    message: 'Post deleted successfully',
    id: req.params.id
  });
});

router.get('/users', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'u1', name: 'Admin', role: 'admin', email: 'admin@example.com' },
      { id: 'u2', name: 'Editor', role: 'editor', email: 'editor@example.com' }
    ]
  });
});

router.post('/users', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'User created',
    data: req.body
  });
});

router.get('/audit-logs', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'a1', action: 'login', timestamp: new Date().toISOString() }
    ]
  });
});

module.exports = router;
