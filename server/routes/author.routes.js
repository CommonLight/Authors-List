const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/allAuthors', AuthorController.getAllAuthors)
    app.get('/api/oneAuthor/:id', AuthorController.getOneAuthor)
    app.post('/api/createAuthor', AuthorController.createAuthor)
    app.patch('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}