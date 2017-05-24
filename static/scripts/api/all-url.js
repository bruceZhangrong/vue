//地址
// const SERVER_URL = `http://www.ih5.cn`;

const api = {
	LOGIN: `/app/user/login`,  //登录
	HOME_LIST: `/app/vxwork/list`, //home页列表信息
	USER_INFO: `app/user/logininfo`, //用户信息
    HOME_DETAIL: `app/vxwork/show`,  //home也列表详情
    CHANGE_PASSWORD: `app/user/editpassword`,  //修改密码
    BIND_PHONE: `app/sms/send`, //绑定手机
}

module.exports = api;