const { check, body, param, query } = require('express-validator');

const bookValidator = {
    // getAllBook: [
    //     query('searchText').optional({ checkFalsy: true }).isString().withMessage('searchTextmust be a string'),
    // ],
    createBook: [
        body('title').isString().withMessage('title must be a string'),
        body('ISBN').isNumeric().withMessage('ISBN must be a integer'),
        body('author').isString().withMessage('author must be a string'),
    ],
    updateBook: [
        body('id').isNumeric().withMessage('id must be a number')
    ],
    deleteBook: [
        body('id').isNumeric().withMessage('id must be a number')
    ],
    searchBook: [
        body('searchText').isString().withMessage('searchText must be a string')
    ],
}
module.exports.bookValidator = bookValidator;

const userValidator = {
    createUser: [
        body('firstName').isString().withMessage('firstName must be a string'),
        body('lastName').isString().withMessage('lastName must be a string'),
        body('email').isString().withMessage('email must be a string'),
        body('phoneNo').isString().withMessage('phoneNo must be a string'),
    ],
    createPatron: [
        body('purchasesDate').isString().withMessage('searchText must be a string'),
        body('returnDate').isString().withMessage('searchText must be a string')
    ],
}

module.exports.userValidator = userValidator;