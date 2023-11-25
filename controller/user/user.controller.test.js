let userController = require("./user.controller");
const user = require('../../models').user;
const role = require('../../models').role;

const mockRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
}
const mockResponse = () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
}

jest.setTimeout(200000);
describe('user Controller', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    test('createUser', async () => {
        let req = mockRequest();
        let res = mockResponse();
        req.body = { name: 'Admin', code: '23' }
        role.findOne = jest.fn()
            .mockRejectedValueOnce(new Error('Error'))
            .mockRejectedValueOnce(Promise.resolve({ name: 'Admin', code: '23' }))
        user.create = jest.fn()
            .mockRejectedValueOnce(new Error('Error'))
            .mockRejectedValueOnce(Promise.resolve({ firstName: 'kumar', lastName: 's', gmail: 'kumar1407@gmail.com', password: '12345566', phoneNo: 738292355 }))
        await
            userController.createUser(req, res);
        expect(res.statusCode).toBe(200); n

    });
});