import request from "@/util/request";


/**
 * 更新管理员信息
 */
const updateAdminService = function (admin) {
    return request.put('/admin/update', admin);
};

const restoreService = function () {
    return request.get('/admin/backup')
}
const backUpService = function () {
    return request.get('/admin/backup')
}

export {
    updateAdminService,
    restoreService,
    backUpService
};