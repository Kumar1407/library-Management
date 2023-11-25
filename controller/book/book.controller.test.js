let bookController = require("./book.controller");
const book = require('../../models').book;

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
describe('book Controller', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    test('createBook', async () => {
        let req = mockRequest();
        let res = mockResponse();
        req.body = { id: 1, title: digitalElectronic }
        book.cteate = jest.fn()
            .mockRejectedValueOnce(new Error(Error))
            .mockRejectedValueOnce(Promise.resolve({ id: 1, title: digitalElectronic }))
        await
            bookController.createBook(req, res);
        expect(res.statusCode).toBe(200);

    });
})

describe('book Controller', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    test('updateBook', async () => {
        let req = mockRequest();
        let res = mockResponse();
        req.body = { id: 1 }
        book.update = jest.fn()
            .mockRejectedValueOnce(new Error(Error))
            .mockRejectedValueOnce(Promise.resolve({ id: 1 }))
        await
            bookController.updateBook(req, res);
        expect(res.statusCode).toBe(200);

    });
})

describe('book Controller', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    test('deleteBook', async () => {
        let req = mockRequest();
        let res = mockResponse();
        req.body = { id: 1 }
        book.destroy = jest.fn()
            .mockRejectedValueOnce(new Error(Error))
            .mockRejectedValueOnce(Promise.resolve({ id: 1 }))
        await
            bookController.deleteBook(req, res);
        expect(res.statusCode).toBe(200);

    });
})

describe('book Controller', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    test('searchBook', async () => {
        let req = mockRequest();
        let res = mockResponse();
        req.body = { searchtest: digitalElectronic }
        book.findAll = jest.fn()
            .mockRejectedValueOnce(new Error(Error))
            .mockRejectedValueOnce(Promise.resolve({ searchtest: digitalElectronic }))
        await
            bookController.searchBook(req, res);
        expect(res.statusCode).toBe(200);

    });
})