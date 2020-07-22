const express = require('express');
const router = express.Router();
const Book = require('../models/Books');

router.get('/api/books/get', async (req, res) => {
    const books = await Book.find()
    res.send(books)
});

router.post('/api/books', (req, res) => {
    console.log(req.body)
    res.end()
    var book = new Book(req.body)
    book.save()
});

router.delete('/api/books/:id', (req, res) => {
    console.log(req.params)
    Book.deleteOne({ _id:req.params.id }, function (err) {
        if (err) console.log(err)
    })
    res.end()
});

module.exports = router;