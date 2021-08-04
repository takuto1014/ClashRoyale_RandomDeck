
document.getElementById("link_button").addEventListener("click", function () {
    const textbox = document.getElementById("link")
    const value = textbox.value
    if(value.indexOf('https://link.clashroyale.com/deck/en?deck=2') != -1){
        localStorage.setItem('key', value);
        location.reload();
    }else{
        alert("入力したリンクが間違っています")
    }
    
}, false);

document.getElementById("link_button2").addEventListener("click", function () {
    var link = localStorage.getItem('key');
    location.href=link

    
}, false);

var link = localStorage.getItem('key');
var result = link.split(";")
var result_0 = result[0].split("=")
//alert(result_0[1] + result[1])
var img_1 = "img/"+result_0[1]+".png"
var img_2 = "img/"+result[1]+".png"
var img_3 = "img/"+result[2]+".png"
var img_4 = "img/"+result[3]+".png"
var img_5 = "img/"+result[4]+".png"
var img_6 = "img/"+result[5]+".png"
var img_7 = "img/"+result[6]+".png"
var img_8 = "img/"+result[7]+".png"
let img_01 = document.getElementById("image_place1");
img_01.src = img_1;
let img_02 = document.getElementById("image_place2");
img_02.src = img_2;
let img_03 = document.getElementById("image_place3");
img_03.src = img_3;
let img_04 = document.getElementById("image_place4");
img_04.src = img_4;
let img_05 = document.getElementById("image_place5");
img_05.src = img_5;
let img_06 = document.getElementById("image_place6");
img_06.src = img_6;
let img_07 = document.getElementById("image_place7");
img_07.src = img_7;
let img_08 = document.getElementById("image_place8");
img_08.src = img_8;






