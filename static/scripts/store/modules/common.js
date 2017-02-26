import * as types from '../constants/common';

const state = {
	header: {
		isBgColor: false,
		isBorder: true,
		bgColor: '',
		opacity: 0,
		centerPart: '',
		leftPart: '',
		rightPart: '',
		leftFunc: ()=>{},
		centerFunc: ()=>{},
		rightFunc: ()=>{}
	}
}

const actions = {
	changeHeader({ commit }, type){
		type.isBgColor = type.isBgColor == null ? false : type.isBgColor;
		type.isBorder = type.isBorder == null ? true : type.isBorder;
		type.bgColor = type.bgColor == null ? '' : type.bgColor;
		type.opacity = type.opacity == null ? '' : type.opacity;
		type.centerPart = type.centerPart == null ? '' : type.centerPart;
		type.leftPart = type.leftPart == null ? '' : type.leftPart;
		type.rightPart = type.rightPart == null ? '' : type.rightPart;
		type.leftFunc = type.leftFunc == null ? ()=>{} : type.leftFunc;
		type.centerFunc = type.centerFunc == null ? ()=>{} : type.centerFunc;
		type.rightFunc = type.rightFunc == null ? ()=>{} : type.rightFunc;
		commit(types.COMM_HEADER,type);
	}
}

const mutations = {
	[types.COMM_HEADER](state, type) {
		state.header = Object.assign(state.header, type);
	}
}

const getters = {
	header: state => state.header
}

export default  {
	state,
	actions,
	mutations,
	getters
}