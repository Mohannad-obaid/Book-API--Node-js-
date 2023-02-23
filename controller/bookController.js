var sName = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../util/utility');


exports.getAllBook = async (req, res)=> {
    try {
        var bookListQuery = sName.queryList.GET_BOOK_LIST_QUERY;
        var result = await dbConnection.dbQuery(bookListQuery);

        if(result.rows.length == 0){
            return res.status(404).send( 'No data found' );
        }

        return res.status(200).send(JSON.stringify(result.rows));
    } catch (err) {
        return res.status(500).send({ error: 'Error(store controller) *** ' + err.message });
    }

}

exports.getDetlsBook = async (req, res)=> {
    try {
        var bookId = req.params.bookId;
        var bookListQuery = sName.queryList.GET_DETIAL_BOOK;
        var result = await dbConnection.dbQuery(bookListQuery,[bookId]);
        return res.status(200).send(JSON.stringify(result.rows[0]));
    } catch (err) {
        return res.status(500).send({ error: 'Error(book controller) *** ' + err.message });
    }

}

exports.saveBook =async  (req, res)=> {
    try {
        var bookName = req.body.bookName;
        var bookAuthor  =req.body.bookAuthor;
        var bookDescription = req.body.bookDescription
        let storeCode = req.body.storeCode
        var createOn = new Date();

        if(!bookName || !bookAuthor || !storeCode){
            return res.status(400).send({ error: console.error() });
        }

        var saveBookQuery = sName.queryList.SAVE_BOOK_QUERY;

        var queryParams = [bookName, bookAuthor, bookDescription,storeCode,createOn];
        var result = await dbConnection.dbQuery(saveBookQuery, queryParams);

        return res.status(200).send('success save \n' + JSON.stringify(result.rows));
    } catch (err) {
        return res.status(500).send({ error: 'Error **** \n' + err.message });
    }
   
}

exports.updateBook = async (req, res)=> { 
    try {
        var book_id = req.body.bookID;
        var bookName = req.body.bookName;
        var book_author  =req.body.bookAuthor;
        var book_description = req.body.bookDescription
        let storeID = req.body.storeID
       

        if(!bookName || !book_author || !book_id || !book_description || !storeID){
            return res.status(400).send({ error: 'Book name, author, description, store id and book id are required' });
        }

        var updateBookQuery = sName.queryList.UPDATE_BOOK;

        var queryParams = [bookName, book_author, book_description,storeID,book_id];
        var result = await dbConnection.dbQuery(updateBookQuery, queryParams);

        return res.status(200).send('success update'); 
    } catch (err) {
        return res.status(500).send({ error: 'Error **** \n' + err.message });
    }
}

exports.deleteBook = async (req, res)=> {
    try {
        var bookId = req.params.bookId;

        if(!bookId ){
            return res.status(400).send({ error: 'Book id required' });
        }

        var deleteeBookQuery = sName.queryList.DELETE_BOOK;

        await dbConnection.dbQuery(deleteeBookQuery, [bookId]);

        return res.status(200).send('success delete');
    } catch (err) {
        return res.status(500).send({ error: 'Error **** \n' + err.message });
    }
}