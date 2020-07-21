const express = require('express');
const router = express.Router();
const Book = require('../models/Books');

router.get('/api/books', async (req, res) => {
    console.log('get')
    const books = await Book.find()
    res.send(books)
});

router.post('/api/books', (req, res) => {
    console.log(req.body)
    res.end()
    var book = new Book(req.body)
    book.save()
});

router.delete('api/books/:id', (req, res) => {
    console.log('delete')
});

module.exports = router;