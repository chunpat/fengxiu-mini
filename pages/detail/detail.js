import { Spu } from "../../models/spu";

Page({
    data: {
    },
    async onLoad(options) {
        const spuId = options.id;
        const spu = await Spu.getSpuDetail(spuId);
        console.log('spu',spu)
        this.setData({
            spu
        })
    }
})