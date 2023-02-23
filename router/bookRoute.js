var express = require('express');
var bookRouter = express.Router();
var bookController = require('../controller/bookController');


bookRouter.get('/book', bookController.getAllBook);
bookRouter.get('/book/details/:bookId', bookController.getDetlsBook);
bookRouter.post('/book/save', bookController.saveBook);
bookRouter.put('/book/update', bookController.updateBook);
bookRouter.delete('/book/delete/:bookId', bookController.deleteBook);

module.exports = bookRouter;