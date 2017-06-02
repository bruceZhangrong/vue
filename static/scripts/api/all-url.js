//地址
// const SERVER_URL = `http://www.ih5.cn`;

const api = {
	LOGIN: `/app/user/login`,  //登录
    HOME_LIST: `/app/vxwork/list`, //home页列表信息
	FOCUS_LIST: `/app/user/list`, //关注的列表信息
	USER_INFO: `app/user/logininfo`, //用户信息
    HOME_DETAIL: `app/vxwork/show`,  //home也列表详情
    CHANGE_PASSWORD: `app/user/editpassword`,  //修改密码
    SEND_SMS: `app/sms/send`, //发送手机短信验证码
    BIND_PHONE:`app/user/editphone`,  //修改手机号码
    USER_FOCUS:`app/user/follow`, //点击关注
    MY_FAVORITE: `app/vxwork/follow`, //点击收藏
    CANCEL_FAVORITE: `app/vxwork/unFollow`, //取消收藏
}

module.exports = api;