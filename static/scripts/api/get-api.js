
import axios from 'axios';
import qs from 'qs';
import $ from 'jquery';
import Store from '../store/store'
import { Toast } from 'mint-ui'


const $_AXIOS = ({
	select_type,
	url,
	datas,
	headers = {
		Authorization: "Bearer {" + localStorage.getItem("token") + "}"
	},
	type = "post",
	success,
	error
}) => {
	Store.dispatch('showLoading',{
		isLoading: true
	});
	if(select_type == "ax") {
		return axios({
			method: 'post',
			url:url,
			timeout: 5000,
			auth: datas,
			header: headers,
			success: success,
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
			data: datas,
			header: headers,
			success: success,
			error: error
		}).then(() => {
			Store.dispatch('showLoading',{
				isLoading: false
			});
		}).catch(res => {
			Store.dispatch('showLoading',{
				isLoading: false
			});
			Toast(res.responseJSON.error);
		});
	}
}


export default $_AXIOS;