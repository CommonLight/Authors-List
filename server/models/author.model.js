const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    
    authorName: {type: String, 
        required: [true, `Author name is required.`],
        minlength: [5, `Name must be five or more characters long.`]},
 
    booksWritten: {type: Number,
        required: [true, `Number of books is required.`]},
    
    mostFamous: {type: String,
        required: [true, `Most famous book title is required.`]}

}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema)