const Author = require('../models/author.model')

module.exports = {
    // CREATE //
    createAuthor: (request, response) => {
        Author.create(request.body)
            .then((newAuthor) => {response.status(200).json(newAuthor)})
            .catch((error) => {response.status(400).json(error)})},

// READ //
    getAllAuthors: (request, response) => {
        Author.find()
            .then((allAuthors) => {response.status(200).json(allAuthors)})
            .catch((error) => {response.status(400).json(error)})},

    getOneAuthor: (request, response) => {
        Author.findById({_id:request.params.id})
            .then((oneAuthor) => {response.status(200).json(oneAuthor)})
            .catch((error) => {response.status(400).json(error)})},

// UPDATE //
    updateAuthor: (request, response) => {
        Author.findByIdAndUpdate({_id:request.params.id}, request.body, {new: true, runValidators: true})
            .then((updatedAuthor) => {response.status(200).json(updatedAuthor)})
            .catch((error) => {response.status(400).json(error)})},

// DELETE //
    deleteAuthor: (request, response) => {
        Author.findByIdAndDelete({_id:request.params.id})
            .then((result) => {response.status(200).json(result)})
            .catch((error) => {response.status(400).json(error)})}
}