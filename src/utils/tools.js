/**
 * tools.js
 * commom function
 */

const vTools = {
	setDomStyle(dom, obj) {
		for(let v in obj) {
			dom.style[v] = obj[v];
		}
	},
	checkPhone(phone) {
		if(phone.match(/^1[3578]\d{9}$/)) {
			return true
		} else {
			return false
		}
	},
	checkPassword(psd) {
		if(psd.match(/^[\d\w@?!#$%^&*]{6,}$/)) {
			return true
		} else {
			return false
		}
	}
}









export default vTools;