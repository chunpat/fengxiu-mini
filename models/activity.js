import {config} from '../config/config'
import { Http } from '../utils/http';

class Activity{
    static getHomeActivity() {
        return Http.request(
          `activity/name/a-2`,
          {
           
          },
          'GET'
        );      
    }
}

export {
  Activity
}