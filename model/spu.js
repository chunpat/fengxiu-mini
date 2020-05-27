import {config} from '../config/config'
import { Http } from '../utils/http';
import { Paging } from '../utils/paging';

class Spu{
    count = 3;
    start = 0;
    spuLoadmoreType = "loading";
    isLoadmoreFinish = false;

    async getHomeSpu() {
      if(this.isLoadmoreFinish){
          return {
            spuLoadmoreType:"end"
          };
      }
      let spu =  await Paging.request({
          url:`spu/latest`,
        },
        this.count,
        this.start,
      );   
      this.start += this.count; 
      if(this.start > spu.total){
        this.isLoadmoreFinish = true;
      }
      console.log('sss');
      return spu;
        // return Paging.request(`spu/latest`);      
    }
}

export {
  Spu
}