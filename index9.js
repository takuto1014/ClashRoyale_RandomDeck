//レトロロワイヤルチャレンジ
links1 = ["https://link.clashroyale.com/deck/en?deck=28000001;26000015;26000006;26000008;26000037;26000029;26000032;28000008","https://link.clashroyale.com/deck/en?deck=28000001;26000027;28000000;26000003;28000010;26000037;26000012;26000007","https://link.clashroyale.com/deck/en?deck=28000001;26000006;26000013;26000037;26000029;26000032;26000005;26000010","https://link.clashroyale.com/deck/en?deck=28000004;26000030;26000026;28000003;26000010;27000006;28000011;26000011","https://link.clashroyale.com/deck/en?deck=26000015;26000006;26000034;28000005;26000037;26000035;28000011;28000012","https://link.clashroyale.com/deck/en?deck=26000027;27000007;26000003;26000018;26000022;28000002;26000033;26000017","https://link.clashroyale.com/deck/en?deck=26000027;26000042;28000000;26000003;26000039;26000032;26000016;28000008","https://link.clashroyale.com/deck/en?deck=26000015;26000006;28000005;26000023;26000035;26000004;28000012;28000008","https://link.clashroyale.com/deck/en?deck=26000001;28000000;26000030;26000000;26000010;27000006;28000011;27000008","https://link.clashroyale.com/deck/en?deck=28000004;26000030;26000000;26000026;28000003;26000012;27000006;28000011","https://link.clashroyale.com/deck/en?deck=26000023;26000000;28000003;26000010;27000006;28000011;28000012;27000008","https://link.clashroyale.com/deck/en?deck=27000000;28000000;26000021;26000038;26000030;26000014;26000010;28000011","https://link.clashroyale.com/deck/en?deck=26000027;26000042;27000010;26000030;28000007;26000039;26000024;28000011"]
document.getElementById("link1-0").addEventListener("click", function () {
    location.href=links1[0]
}, false); 
document.getElementById("link1-1").addEventListener("click", function () {
    location.href=links1[1]
}, false); 
document.getElementById("link1-2").addEventListener("click", function () {
    location.href=links1[2]
}, false); 
document.getElementById("link1-3").addEventListener("click", function () {
    location.href=links1[3]
}, false); 
document.getElementById("link1-4").addEventListener("click", function () {
    location.href=links1[4]
}, false); 
document.getElementById("link1-5").addEventListener("click", function () {
    location.href=links1[5]
}, false); 
document.getElementById("link1-6").addEventListener("click", function () {
    location.href=links1[6]
}, false); 
document.getElementById("link1-7").addEventListener("click", function () {
    location.href=links1[7]
}, false); 
document.getElementById("link1-8").addEventListener("click", function () {
    location.href=links1[8]
}, false); 
document.getElementById("link1-9").addEventListener("click", function () {
    location.href=links1[9]
}, false); 
document.getElementById("link1-10").addEventListener("click", function () {
    location.href=links1[10]
}, false); 
document.getElementById("link1-11").addEventListener("click", function () {
    location.href=links1[11]
}, false); 

for(i=0;i<links1.length;i++){
    link = links1[i]
    link_split = link.split(";")
    link_split2 = link_split[0].split("=")
    card1 = link_split2[1]+".png";
    card2 = link_split[1]+".png";
    card3 = link_split[2]+".png";
    card4 = link_split[3]+".png";
    card5 = link_split[4]+".png";
    card6 = link_split[5]+".png";
    card7 = link_split[6]+".png";
    card8 = link_split[7]+".png";

    let img_1 = document.getElementById("image_place1-"+i+"-1");
    img_1.src = card1;
    let img_2 = document.getElementById("image_place1-"+i+"-2");
    img_2.src = card2;
    let img_3 = document.getElementById("image_place1-"+i+"-3");
    img_3.src = card3;
    let img_4 = document.getElementById("image_place1-"+i+"-4");
    img_4.src = card4;
    let img_5 = document.getElementById("image_place1-"+i+"-5");
    img_5.src = card5;
    let img_6 = document.getElementById("image_place1-"+i+"-6");
    img_6.src = card6;
    let img_7 = document.getElementById("image_place1-"+i+"-7");
    img_7.src = card7;
    let img_8 = document.getElementById("image_place1-"+i+"-8");
    img_8.src = card8;
    //console.log(card1)

    
}

