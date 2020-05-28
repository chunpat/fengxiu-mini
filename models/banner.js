import {config} from '../config/config'
import { Http } from '../utils/http';

class Banner{
    static bannerB = 'b-1'
    static bannerG = 'b-2'

    static getHomeBannerB() {
        return Http.request(`banner/name/${Banner.bannerB}`);      
    }

    static getHomeBannerG() {
      return Http.request(`banner/name/${Banner.bannerG}`);         
    }
}

export {
  Banner
}