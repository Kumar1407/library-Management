const userService = require('../../service/user/user.service');
const validation = require('../../library validation/validation');
const validate = require('../../midddleware/validation');
const router = require('express').Router({ mergeParams: true });
require('../../global_functions');

/*This is create user controller function */

const createUser = async (req, res) => {
    let userData = {
        firstName: req && req.body && req.body.firstName ? req.body.firstName : null,
        lastName: req && req.body && req.body.lastName ? req.body.lastName : null,
        email: req && req.body && req.body.email ? req.body.email : null,
        password: req && req.body && req.body.password ? req.body.password : null,
        phoneNo: req && req.body && req.body.phoneNo ? req.body.phoneNo : null,
    }
    let [userErr, userRes] = await to(userService.createUser(userData, req.body.name, req.body.code))
    if (userErr) ReE(res, userErr, 422);
    if (userRes) Res(res, userRes, 200);
}
/*This is login controller function */
const logIn = async (req, res) => {
    let [logInErr, logInRes] = await to(userService.logIn(req.body.email))
    if (logInErr) ReE(res, logInErr, 422);
    if (logInRes) Res(res, logInRes, 200);
}

router.post('/', validation.userValidator.createUser, validate.validate, createUser);
router.post('/login', logIn)

module.exports = { router, createUser, logIn }