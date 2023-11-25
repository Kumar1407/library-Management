const patronService = require('../../service/user/patron.service');
const validation = require('../../library validation/validation');
const validate = require('../../midddleware/validation');
const passport = require('passport');
const router = require('express').Router({ mergeParams: true });
require('../../global_functions');

/*This is create patron controller function */

const checkOut = async (req, res) => {
    let patronData = {
        purchasesDate: req && req.body && req.body.purchasesDate ? req.body.purchasesDate : null,
        returnDate: req && req.body && req.body.returnDate ? req.body.returnDate : null,
    }
    let [patronErr, patronRes] = await to(patronService.checkOut(patronData))
    if (patronErr) ReE(res, patronErr, 422);
    if (patronRes) Res(res, patronRes, 200);
}

router.post('/', passport.authenticate('jwt', { session: false }), validation.userValidator.createPatron, validate.validate, checkOut);

module.exports = { router, checkOut }