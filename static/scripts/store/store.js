import Vuex from 'vuex';
import common from './modules/common';
// import main from './modules/main';
// import message from './modules/message';
// import introduction from './modules/introduction';
// import user from './modules/user';

// Vue.use(Vuex);

console.log(123456);

const store = new Vuex.Store({
	modules: {
		common
		// main,
		// message,
		// introduction,
		// user
	}
	// strict: process.env.NODE_ENV !== 'production' //严格模式
});

export default store