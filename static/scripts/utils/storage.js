const Storage = {

    setLocalData(key,value,from){
        value = typeof(value) =="string" ? value:JSON.stringify(value);
        localStorage.setItem(key,value);
    },

    getLocalData(key){
        if (localStorage.getItem(key)) {
            if (localStorage.getItem(key).indexOf('[')!= -1 || localStorage.getItem(key).indexOf('{')!= -1 ) {
                return JSON.parse(localStorage.getItem(key));
            }else{
                return localStorage[key].trim();
            }
        }
        return null ;
    },

    removeLocalData(key){
        localStorage.removeItem(key);
    },

    clearLocalData(){
        localStorage.clear();
    }

};

export default Storage;
