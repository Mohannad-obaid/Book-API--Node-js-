exports.queryList ={
    GET_STORE_LIST_QUERY : 'SELECT STORE_ID, STORE_NAME,STORE_CODE FROM BMS.STORE' ,
    SAVE_STORE_QUERY     : 'INSERT INTO BMS.STORE (STORE_NAME, STORE_CODE, CREATED_BY) VALUES($1, $2, $3)',
    UPDATE_STORE_QUERY   : 'UPDATE BMS.STORE SET STORE_NAME=$1, STORE_CODE=$2 WHERE STORE_ID= $3',
    DELETE_STORE_QUERY   : 'DELETE FROM BMS.STORE WHERE STORE_ID= $1',

    GET_BOOK_LIST_QUERY  : 'SELECT book_id, book_name, book_author, book_description, store_id, create_on FROM bms.book',
    SAVE_BOOK_QUERY      : 'INSERT INTO bms.book(book_name, book_author, book_description, store_id) VALUES($1, $2, $3, $4)',
    GET_DETIAL_BOOK      : 'SELECT BOOK_ID, BOOK_NAME, BOOK_AUTHOR,STORE_NAME,BMS.BOOK.STORE_ID , CREATE_ON  FROM BMS.BOOK INNER JOIN  BMS.STORE ON BOOK.STORE_ID = STORE.STORE_ID WHERE BOOK_ID =$1',
    UPDATE_BOOK          : 'UPDATE bms.book SET book_name=$1, book_author=$2, book_description=$3, store_id=$4 WHERE book_id=$5',
    DELETE_BOOK          : 'DELETE FROM bms.book WHERE book_id=$1'
}