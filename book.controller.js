const bookService = require('../../service/book/book.service');
const validation = require('../../libary validation/validation');
const validate = require('../../midddleware/validatedor/validation');
const passport = require('passport');
const router = require('express').Router({ mergeParams: true });
require('../../global_functions');

/*This is create Book controller function */

const createBook = async (req,res) =>
{
let bookData = {
         title: req && req.body && req.body.title ? req.body.title : null ,
         author: req && req.body && req.body.author ? req.body.author : null,
         ISBN: req && req.body && req.body.ISBN ? req.body.ISBN : null 
};
let  [bookErr, bookRes] = await to (bookService.createBook(bookData))
if(bookErr) ReE(res,bookErr,422);
if(bookRes) Res(res,bookRes,200);
}

/*This is update book controller function */

const updateBook = async (req,res) =>
{
    let bookData = {

        title: req && req.body && req.body.title ? req.body.title : null ,
        author: req && req.body && req.body.author ? req.body.author : null,
        ISBN: req && req.body && req.body.ISBN ? req.body.ISBN : null 
};
let  [bookErr, bookRes] = await to (bookService.updateBook(bookData,req.body.id));
if(bookErr) ReE(res,bookErr,422);
if(bookRes) Res(res,bookRes,200);
}

/*This is delete book controller function */

const deleteBook = async (req,res) =>
{
let id = req && req.body && req.body.id ? req.body.id : null ;
let  [bookErr, bookRes] = await to (bookService.deleteBook(id));
if(bookErr) ReE(res,bookErr,422);
if(bookRes) Res(res,bookRes,200);
}

/*This is search book controller function */

const searchBook = async (req,res) =>
{
let searchTest = req && req.body && req.body.searchTest ? req.body.searchTest : null ;
let  [bookErr, bookRes] = await to (bookService.searchBook(searchTest));
if(bookErr) ReE(res,bookErr,422);
if(bookRes) Res(res,bookRes,200);
}

router.post('/',passport.authenticate('jwt',{session:false}),validation.bookValidator.createBook,validate.validate, createBook);
router.post('/update',passport.authenticate('jwt',{session:false}),validation.bookValidator.updateBook,validate.validate,updateBook);
router.post('/delete',passport.authenticate('jwt',{session:false}),validation.bookValidator.deleteBook,validate.validate, deleteBook);
router.post('/search',validation.bookValidator.searchBook,validate.validate, searchBook);

module.exports = { router, createBook,updateBook,deleteBook,searchBook}