# 微信小程序商城

## ui组件
Lin UI: http://doc.mini.talelin.com/

## ES6 await & async 同步编程

## 矩阵运算
$arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
//行变列 列变行
for(j=1;j <= count(arr); i++){
    let newArray = []
    for(i=1;i <= count(arr[0]); i++){
        newArray[j][] = $arr[j][i] 
    }
}

## Css 盒模型
```html
<div class='container'>
    <div class='inner-container'></div>
</div>
```
```css
.container{
    height:60rpx;
    border:2rpx solid #333333;
    padding:2rpx;
    box-sizing:border-box; //盒子模型 能让总高度固定为60rpx
}
.inner-container{
    height:100%;
}
```
## 对象处理数据，存储数据

## 组件冒泡
文档
https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html

## 注意
~小程序代码最大2M~