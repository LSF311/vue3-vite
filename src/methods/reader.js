import request from "@/util/request";

// 修改用户信息
const updateReaderService = function (reader) {
    return request.post('/reader/update', reader);
};

// 查询所有用户信息
const getAllReaderService = (condition) => {
    return request.post('/reader', condition);
}

const updateEnableService = function (reader) {
    return request.post(`/reader/enable/${reader}`);
};
const updateDisableService = function (reader) {
    return request.post(`/reader/disable/${reader}`);
};


// 根据id删除读者信息
const deleteReaderService = (id) => {
    return request.delete('/reader/' + id);
}
export {
    updateReaderService,
    getAllReaderService,
    deleteReaderService,
    updateEnableService,
    updateDisableService
};