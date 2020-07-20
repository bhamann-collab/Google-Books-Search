const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//==============================
// Book Schema
//==============================

const BookSchema = new Schema({
    title: {
        type: String,
        default: 'no title'
    },
    authors: {
        type: Schema.Types.Mixed,
        default: 'no authors'
    },
    description: {
        type: String,
        default: 'no description'
    },
    image: {
        type: String,
        default: 'no image'
    },
    link: {
        type: String,
        default: 'link'
    }
})

const Book = mongoose.model('book', BookSchema)

module.exports = Book;