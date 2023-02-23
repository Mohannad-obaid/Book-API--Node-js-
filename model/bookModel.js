exports.Book = class Book{
    constructor(bookId, bookName, author, description, store_code,create_on){
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.description = description;
        this.store_code = store_code;
        this.create_on = create_on;
    }
}