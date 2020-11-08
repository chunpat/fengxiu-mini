import {config} from '../config/config'
import { Http } from '../utils/http';

class Theme{
    static locationA = "t-1"; 
    static locationE = "t-2"; 
    static locationF = "t-3"; 
    static locationH = "t-4"; 

    themes = [];

    async getTheme() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}` 
        this.themes = await Http.request(
          `theme/by/names`,
          {
            'names':names
          },
          'GET'
        );   
    }

    getHomeLocationA(){
      return this.themes.find(t=>t.name === Theme.locationA)
    }
    
    getHomeLocationF(){
      return this.themes.find(t=>t.name === Theme.locationF)
    }

    getHomeLocationH(){
      return this.themes.find(t=>t.name === Theme.locationH)
    }


    getHomeLocationE(){
      const names = Theme.locationE
      return Http.request(
        `theme/name/${names}/with_spu`,
        {
        },
        'GET'
      );  
    }
}

export {
    Theme
}