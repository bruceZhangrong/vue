
import axios from 'axios';
import qs from 'qs';
import $ from 'jquery';
import Store from '../../store/store'
import { Toast } from 'mint-ui'
import Routers from '../../router/router'


const $_AXIOS = ({
	select_type,
	noLoading = false,
	url,
	datas,
	headers = {
		"X-Requested-With": "XMLHttpRequest",
		Authorization: "Bearer {" + localStorage.getItem("token") + "}"
	},
	type = "post",
	success,
	error
}) => {
	if(!noLoading) {
		Store.dispatch('showLoading',{
			isLoading: true
		});
	}
	if(select_type == "ax") {
		return axios({
			method: 'post',
			url:url,
			timeout: 5000,
			auth: datas,
			headers: headers,
			success: (res) => {
				if(res.status_code == 205) {
					Routers.replace({path: '/login'});
				} else {
					success(res);
				}
			},
			error: error
		}).then(() => {
			Store.dispatch('showLoading',{
				isLoading: false
			});
		})
	} else {
		return $.ajax({
			type: 'post',
			url:url,
			dataType: 'json',
			timeout: 5000,
			data: datas,
			headers: headers,
			success: (res) => {
				if(res.status_code == 205) {
					Routers.replace({path: '/login'});
				} else {
					success(res);
				}
			},
			error: error
		}).then(() => {
			Store.dispatch('showLoading',{
				isLoading: false
			});
		}).catch(res => {
			Store.dispatch('showLoading',{
				isLoading: false
			});
			if(res.responseJSON.error == null || res.responseJSON.error == '') return;
			Toast(res.responseJSON.error);
		});
	}
}


export default $_AXIOS;