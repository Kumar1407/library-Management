const patron = require('../../models').patron;
require('../../global_functions');

/*This is create patron service function */

const checkOut = async (bookData) =>
{
    let [patronErr,patronRes] = patron.create(bookData);
    if (patronErr) return TE(patronErr.message);
    return patronRes;
}
module.exports.checkOut = checkOut; 