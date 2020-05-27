import {config} from '../config/config'
import { Http } from '../utils/http';

class Category{
    static getHomeCategory() {
        return Http.request(
          `category/grid/all`,
          {
           
          },
          'GET'
        );      
    }
}

export {
  Category
}