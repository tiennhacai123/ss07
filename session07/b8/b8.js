"use strict";
;
let book = [
    {
        title: 'how to fight',
        author: 'abcd',
        price: 1900000,
    },
];
function printBook(book) {
    book.forEach((item, index, arr) => {
        console.log(item);
    });
}
printBook(book);
function updateBook(book, title, author, price) {
    book.forEach((item) => {
        if (item.title == title) {
            item.author = author;
            item.price = price;
        }
    });
    printBook(book);
}
updateBook(book, "how to fight", "Lookism", 10);
