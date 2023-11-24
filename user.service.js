const user = require('../../models').user;
const role = require('../../models').role;
require('../../global_functions');

/*This is update User service function */

const createUser = async (userData,name,code) =>
{
    let roleErr,roleRes,userErr,userRes;
    [roleErr, roleRes] = await to(role.findOne(name,code));
    if(roleErr) TE(roleErr.message);
    if(roleRes)
    {
        roleId = roleRes.id ? roleRes.id : null;
        [userErr,userRes] = await to(user.create(userData));
    }
    if(userErr) TE(userErr.message);
    return {roleRes,userRes}
}

module.exports.createUser = createUser; 

const logIn = async (email) =>
{
    let err,userRes,userObj;
    [err,userRes] = await to (user.findOne({
        where:{
            email: email
        }
    }))
    if(err) TE(err.message);
    if(userRes)
    {
        [err,userObj] = await to (userRes.comparePassword(password));
        if(userObj)
        {
            const userVerifyToken = object.assign({},userObj);
            const token = getJWT(userVerifyToken,CONFIG.jwt_encryption);
        }
        return({
            accessToken:token,r,user:userObj
        });
    }
    else if(err){
        throw TE('INVALID_ACCOUNT');
    }
}

const getJWT = function (user,key){
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return "Bearer" + jwt.sign(user,key,{
        expiresIn: expiration_time
    });
};
module.exports.getJWT = getJWT;