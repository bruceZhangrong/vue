'use strict';

import axios from 'axios';
import qs from 'qs';
import $ from 'jquery';
import api from './all-url';

let API = function() {
	this.login = (userName, psd, callBack)=>{
		axios.post(api.LOGIN, qs.stringify({
			username:userName,
			password:psd
		}),{
			headers: {
				'Authorization': "Bearer {" + localStorage.getItem("token") + "}" 
			}
		}).then(res => {
			callback(res.data)
		}).catch(res => {
			console.log(`login-error:${res}`)
		})
	}
	// this.login = (userName, psd, callBack)=>{
	// 	$.ajax({
	// 		type: 'post',
	// 		url:"/app/user/login",
	// 		headers: {
	// 			'Authorization': "Bearer {" + localStorage.getItem("token") + "}" 
	// 		},
	// 		dataType: 'json',
	// 		data:{
 //            	username:userName,
 //            	password:psd
 //            },
	// 		success: res => {
	// 			callback(res.data);
	// 		},
	// 		error: res => {
	// 			console.log(`error: ${res}`);
	// 		}
	// 	})
	// }
}

module.exports = API;