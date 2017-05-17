/*  函数名（作用）
    getCode(获取验证码)
    JudgeBrowser(浏览器判断)
    reaturnDate(回复日期)
    HadFetchApi(fetch判断)
*/
import LoadingUi from '../components/ui/loading-ui/index.js';

const CommonFunc = {

    //phone:手机号  showArea:触发按钮  time:禁用时间  tip:显示的提示  success:成功回调  error:失败回调
    getCode({ phone=null,showArea=null,time=0,tip='',success=()=>{},error=()=>{} }){
        if (phone==null||showArea==null) return ;
        if (!localStorage.getItem('codeShow')) {
            localStorage.setItem('codeShow',showArea.innerHTML);
        }else{
            if (showArea.innerHTML!==localStorage.getItem('codeShow')) return ;
        }

        let regex = new RegExp(/^1[34578]\d{9}$/);
        if ( regex.test(phone) ) {
            let [ Account ] =[ ];
            function RemainTime(){
                time--;
                if (time>0) {
                    showArea.innerHTML=time+"S";
                    Account = setTimeout(RemainTime,1000);
                }else{
                    showArea.innerHTML=tip;
                    clearTimeout(Account);
                }
            };
            RemainTime();
            success();
        }else{
            error();
        }
    },

    reaturnDate(date){
        let nowDate = new Date().getTime();
        let creatDate = date*1000;
        if (nowDate-(7*86400000)<creatDate) {
            return Math.floor((nowDate-creatDate)/86400000)+"天前";
        };
        if (nowDate-(30*86400000)<creatDate) {
            return Math.floor((nowDate-creatDate)/(7*86400000))+"周前";
        };
        if (nowDate-(365*86400000)<creatDate) {
            return Math.floor((nowDate-creatDate)/(30*86400000))+"月前";
        };
    },

    judgeBrowser() {
        let userAgentInfo = navigator.userAgent;
        let Agents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        flag ? console.log(`PC浏览器 ${userAgentInfo}`) : console.log(`Phone浏览器 ${userAgentInfo}`)
        return flag
    },

    hadFetch(){
        if(self.fetch) {
            localStorage.setItem("Fetch",true);
            // console.log("您的浏览器支持Fetch Api！");
        }else {
            localStorage.setItem("Fetch",false);
            // alert(`您的浏览器不支持Fetch Api,请更新浏览器或者下载谷歌浏览器新版！`);
        }
    },

    setLocalStorage(arr, params) {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i],params[arr[i]])
            window.localStorage.setItem(arr[i], params[arr[i]]);
        }
    },
    showLoadingUi(text, type='snake') {
        LoadingUi.open({
            text: text,
            spinnerType: type
        })
    },
    hideLoadingUi() {
        LoadingUi.close();
    },
    LOGIN() {
        if(window.localStorage.token) {
            return true
        } else {
            return false
        }
    }

}

export default CommonFunc;
