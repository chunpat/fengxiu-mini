import { Spu } from "../../models/spu";

Page({
    data: {
        spuId:null,
        spu:Object
    },
    async onLoad(options) {
        this.spuId = options.id;
        this.spu = await Spu.getSpuDetail(this.spuId);
    }
})