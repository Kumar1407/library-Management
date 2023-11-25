let patronController = require("./patron.controller");
const patron = require('../../models').patron;

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
describe('patron Controller', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    test('checkOut', async () => {
        let req = mockRequest();
        let res = mockResponse();
        req.body = { purchasesDate: '5-05-20231', returnDate: '14-07-2023' }
        patron.cteate = jest.fn()
            .mockRejectedValueOnce(new Error('Error'))
            .mockRejectedValueOnce(Promise.resolve({ purchasesDate: '5-05-20231', returnDate: '14-07-2023' }))
        await
            patronController.checkOut(req, res);
        expect(res.statusCode).toBe(200);

    });
});

