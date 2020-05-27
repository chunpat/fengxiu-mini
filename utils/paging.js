import { promisic } from "./util";
import { config } from "../config/config";
import { Http } from "./http";

class Paging{
    lock = false;
    url = '';

    static async request(
        {
            url,
            data = {},
            method = 'GET'
        },
        count = 10,
        start = 0
    ){
        if(!this.getLock()){
            return ;
        }
        this.setUrl(url,count,start)

        this.loadingData = await Http.request(this.url,data,method)
        this.releaseLock();
        return this.loadingData;
    }

    static getLock(){
        if(!this.lock){
            this.lock = true;
            return true;
        }
        return false;
    }

    static releaseLock(){
        this.lock = false;
        return true;
    }

    static setUrl(url,count,start){
        let param = `count=${count}&start=${start}`;
        if(url.includes('?')){
            url = url + '&' + param
        }else{
            url = url + '?' + param
        }
        this.url = url
        return ;
    }
}

export {
    Paging
}