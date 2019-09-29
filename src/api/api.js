import https from '@/utils/axios'  //引入我们二次封装的axios.js文件
// 以下为使用例子


// a. post请求，参数是json类型的

const PASSWORDUPDARE = '/account/accountUpdate';  //请求的地址
export const passwordUpdate = function (params) {
    return https(PASSWORDUPDARE, params, "post");
};

// b.post请求，参数是字符串类型

const PASSWORDUPDAREONE = "/account/accountUpdate";  //请求的地址
export const passwordUpdateTwo = function (params) {
    return https(PASSWORDUPDAREONE, params, "post", "from");
};


// c.get请求
const PASSWORDUPDARETWO = "/account/accountUpdate";  //请求的地址
export const passwordUpdateOne = function (params) {
    return https(PASSWORDUPDARETWO, params);
};


export const MYTRANFERRECORD = 'api/transfer/myTranferRecord'
export const myTranferRecord = function (params) {
    return https(MYTRANFERRECORD, params);
}

// 使用mock生成随机数
// const MOCKAPI = 'api/transfer/myTranferRecord'
// export const mockApi = function(params){
//     return https(MOCKAPI, params,'post');
// }

//登录
const GETLOGIN = 'api-a-bkf-/authority/user/getUserList?id=100&page=1&limit=5'
export const getLogin = function (params) {
    return https(GETLOGIN, params, 'post');
}

// 得到bs权限
const STSTEMLIST = 'api-a-bkf-/dictionary/selectMySystemNameList?id=0464bf14b8ee4c3f9d88eaf926c5966c'
export const systemList = function (params) {
    return https(STSTEMLIST, params, 'post');
}

const MOCKAPI = '/user/myTranferRecord'
export const mockApi = function (params) {
    return https(MOCKAPI, params, 'get');
}

const GETfORM = '/getForm'
export const getForm = function (params) {
    return https(GETfORM, params, 'get');
}

//select下拉框接口
const SIGNNAME = '/api-a-bkf-/dictoryLineController/dictoryLineController/getDictoryList?signName=AAA'
export const signName = function (params) {
    return https(SIGNNAME, params, 'post');
}

//单选框按钮
const GETRADIOLIST = '/api-a-bkf-/dictoryLineController/dictoryLineController/getDictoryList?signName=AAD'
export const getRadioList = function (params) {
    return https(GETRADIOLIST, params, 'post');
}

//表格接口
const TABLEURL = '/api-a-bkf-/authority/user/getUserListTota'
export const tableUrl = function (params) {
    return https(TABLEURL, params, 'post');
}

// 三级联动  省
const GETZONELISTPROVICE = 'api-a-bkf-/authority/user/getZoneListProvince'
export const getZoneListProvince = function (params) {
    return https(GETZONELISTPROVICE, params, 'post');
}

// 市
const GETZONELISTCITY = 'api-a-bkf-/authority/user/getZoneListCity'
export const getZoneListCity = function (params) {
    return https(GETZONELISTCITY, params, 'post', 'form');
}

// 区
const GETZONELISTAREA = 'api-a-bkf-/authority/user/getZoneListArea'
export const getZoneListArea = function (params) {
    return https(GETZONELISTAREA, params, 'post', 'form');
}

// 街道
const GETZONELISTSTREET = 'api-a-bkf-/authority/user/getZoneListStreet'
export const getZoneListStreet = function (params) {
    return https(GETZONELISTSTREET, params, 'post', 'form');
}


// 表格
const STREET = 'api-a-bkf-/authority/user/getZoneListStreet'
export const street = function (url) {
    return changeProv(url)
}

//登录
const USERLOGIN = '/api-a-nkf-/authority/useController/useLogByNameAndPassWord'
export const userLogin = function (params) {
    return https(USERLOGIN, params, 'post', 'form');
}

/* -------忘记密码-------- */
