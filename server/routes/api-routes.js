const express = require('express');
const router = express.Router();
const Book = require('../models/Books');

router.get('/api/books', (req, res) => {
    console.log('get')
});

router.post('/api/books', (req, res) => {
    console.log('post')
});

router.delete('api/books/:id', (req, res) => {
    console.log('delete')
});

module.exports = router;