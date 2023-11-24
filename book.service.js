const book = require('../../models').book;
require('../../global_functions');

/*This is create Book service function */

const createBook = async (bookData) =>
{
    let [bookErr,bookRes] = book.create(bookData);
    if (bookErr) return TE(bookErr.message);
    return bookRes;
}
module.exports.createBook = createBook; 

/*This is update Book service function */

const updateBook = async (bookData,id) =>
{
    let [bookErr,bookRes] = book.update(bookData,{
        where:{
            id : id,
        }
    });
    if (bookErr) return TE(bookErr.message);
    return bookRes;
}
module.exports.updateBook = updateBook; 

/*This is delete Book service function */

const deleteBook = async (id) =>
{
    let [bookErr,bookRes] = book.destroy({
        where:{
            id : id
        }
    });
    if (bookErr) return TE(bookErr.message);
    return bookRes;
}
module.exports.deleteBook = deleteBook;

/*This is search Book service function */

const searchBook = async (searchTest) =>
{
    let [bookErr,bookRes] = book.findAll({
        where:{
        title:    {
                [Op.iLike]: "%" + searchTest + "%",
           }
        }
    });
    if (bookErr) return TE(bookErr.message);
    return bookRes;
}
module.exports.searchBook = searchBook;