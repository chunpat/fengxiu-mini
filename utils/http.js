import { promisic } from "./util";
import { config } from "../config/config";

class Http{
    static async request(
        url,
        data = {},
        method = 'GET'
    ){
          var res = await promisic(wx.request)({
                url:`${config.apiBaseUrl}${url}`,
                data,
                header:{"appkey":config.appkey},
                method
          });
          return res.data;  
    }
}

export {
    Http
}