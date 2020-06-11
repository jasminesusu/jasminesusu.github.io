
function rate(obj,oEvent){
//==================
// 圖片地址設置
//==================
var imgSrc = 'img/nstar.png'; //沒有填色的星星
var imgSrc_2 = 'img/ystar.png'; //打分後有顏色的星星
//---------------------------------------------------------------------------
if(obj.rateFlag) return;
var e = oEvent || window.event;
var target = e.target || e.srcElement; 
var imgArray = obj.getElementsByTagName("img");
for(var i=0;i<imgArray.length;i++){
   imgArray[i]._num = i;
   imgArray[i].onclick=function(){
    if(obj.rateFlag) return;
    obj.rateFlag=true;
    //alert(this._num+1);       //this._num+1這個數字寫入到數據庫中,作為評分的依據
   };
}
if(target.tagName=="IMG"){
   for(var j=0;j<imgArray.length;j++){
    if(j<=target._num){
     imgArray[j].src=imgSrc_2;
    } else {
     imgArray[j].src=imgSrc;
    }
   }
} else {
   for(var k=0;k<imgArray.length;k++){
    imgArray[k].src=imgSrc;
   }
}
}