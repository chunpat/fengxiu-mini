//index.js

import { Theme } from "../../models/theme"
import { Banner } from "../../models/banner";
import { Category } from "../../models/category";
import { Activity } from "../../models/activity";
import { Spu } from "../../models/spu";

//获取应用实例
const app = getApp()

Page({
  data: {
      themeA:null,
      themeE:null,
      themeESPU:null,
      themeF:null,
      themeH:null,
      bannerB:[],
      bannerG:[],
      grid:[],
      activity:[],
      spu:[],
      spuLoadmoreType:"loading"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: async function () {
    await this.initData()
    await this.initSpuPaging()
  },
  async initData(){
    const theme = new Theme();
    await theme.getTheme();
    const themeA = theme.getHomeLocationA();
    const themeE = await theme.getHomeLocationE();
    const themeF = theme.getHomeLocationF();
    const themeH = theme.getHomeLocationH();
    let themeESPU = [];
    if(themeE.online){
       themeESPU = themeE.spu_list.slice(0,5)
    }
    console.log('themeESPU',themeESPU)
    var bannerB = await Banner.getHomeBannerB();
    var bannerG = await Banner.getHomeBannerG();
    var grid = await Category.getHomeCategory();
    var activity = await Activity.getHomeActivity();

    this.setData({
      themeA:themeA,
      themeE:themeE,
      themeESPU:themeESPU,
      themeF:themeF,
      themeH:themeH,
      bannerB:bannerB,
      bannerG:bannerG,
      grid: grid,
      activity
    })
  },
  async initSpuPaging(){
    this.spu = new Spu();
    var spu = await this.spu.getHomeSpu();
    console.log('spu',spu)
    wx.lin.renderWaterFlow(spu.items)
  },
  tapName: function (event) {
    console.log(event)
  },
  show() {
    wx.lin.showToast({
      title: '创建成功~',
      icon: 'success',
      success: (res) => {
        console.log(res)
      },
      complete: (res) => {
        console.log(res)
      }
    })
  },
  async onReachBottom(){
    var spu = await this.spu.getHomeSpu();
    console.log('spu',spu);
    if(spu.spuLoadmoreType){
      this.setData({
        spuLoadmoreType:spu.spuLoadmoreType
      });
    }
    wx.lin.renderWaterFlow(spu.items)
  }
})
