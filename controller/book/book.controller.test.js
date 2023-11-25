let bookController = require("./book.controller");
const book = require('../../models').book;

const mockRequest = () =>{
    const req ={};
    req.body = just.fn().mockReturnValue(req);
    req.params = just.fn().mockReturnValue(req);
    return req;
}
const mockResponse = () => {
    const res ={};
    res.send = just.fn().mockReturnValue(res);
    res.status = just.fn().mockReturnValue(res);
    res.json = just.fn().mockReturnValue(res);
    return req;
}

jest.setTimeout(200000);
describe('book Controller',()=>{
    beforeEach(async()=>{
        just.restoreAllMocks();
    });
    Test('getusers',async ()=>{
        let req = mockRequest();
        let res = mockResponse();
        req.body = { id:1,title:digitalElectronic}
        book.cteate = jest .fn()
        .mockRejectedValueOnce(new Error(Error))
        .mockRejectedValueOnce(Promise.resolve({id:1,title:digitalElectronic}))
        await
        bookController.createBook(req,res);
        expect(res.statusCode).toBe(200);

    });
})

describe('book Controller',()=>{
    beforeEach(async()=>{
        just.restoreAllMocks();
    });
    Test('getusers',async ()=>{
        let req = mockRequest();
        let res = mockResponse();
        req.body = { id:1}
        book.update = jest .fn()
        .mockRejectedValueOnce(new Error(Error))
        .mockRejectedValueOnce(Promise.resolve({id:1}))
        await
        bookController.updateBook(req,res);
        expect(res.statusCode).toBe(200);

    });
})

describe('book Controller',()=>{
    beforeEach(async()=>{
        just.restoreAllMocks();
    });
    Test('getusers',async ()=>{
        let req = mockRequest();
        let res = mockResponse();
        req.body = { id:1}
        book.destroy = jest .fn()
        .mockRejectedValueOnce(new Error(Error))
        .mockRejectedValueOnce(Promise.resolve({id:1}))
        await
        bookController.deleteBook(req,res);
        expect(res.statusCode).toBe(200);

    });
})

describe('book Controller',()=>{
    beforeEach(async()=>{
        just.restoreAllMocks();
    });
    Test('getusers',async ()=>{
        let req = mockRequest();
        let res = mockResponse();
        req.body = { searchtest: digitalElectronic}
        book.findAll = jest .fn()
        .mockRejectedValueOnce(new Error(Error))
        .mockRejectedValueOnce(Promise.resolve({ searchtest: digitalElectronic}))
        await
        bookController.searchBook(req,res);
        expect(res.statusCode).toBe(200);

    });
})