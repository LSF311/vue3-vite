import request from "@/util/request";

// 查询个人的借书记录
const getBorrowByReaderIdService = function () {
    return request.get('/borrow');
};

//借书
const borrowService = function (isbn, dueDate) {
    return request.get('/borrow/borrowBook', {
        params: {
            isbn: isbn,
            dueDate: dueDate
        }
    });
};
// 还书
const returnBookService = function (id, isbn) {
    console.log(id);
    return request.get('/borrow/returnBook', {
        params: {
            id: id,
            isbn: isbn
        }
    });
};

const payBookService = function (id) {
    console.log(id);
    return request.post(`/borrow/payment/${id}`, {
        params: {
            id: id,
        }
    });
};

const returnDelayBookService = function (id, renewDate) {
    console.log(id);
    return request.get('/borrow/renewBook', {
        params: {
            id: id,
            renewDate: renewDate
        }
    });
};

// 删除借书记录
const deleteByIdService = function (id) {
    return request.delete('/borrow', {
        params: {id: id},
    });
};

//批量删除借阅记录
const deleteBorrowBatchService = function (ids) {
    return request.post('/borrow/batch', ids);
};

export {
    getBorrowByReaderIdService,
    borrowService,
    returnBookService,
    returnDelayBookService,
    deleteByIdService,
    deleteBorrowBatchService,
    payBookService
};