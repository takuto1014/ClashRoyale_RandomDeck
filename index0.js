//『デッキを追加』ボタンの挙動
document.getElementById("link_button").addEventListener("click", function () {
    const textbox = document.getElementById("link")
    const value = textbox.value
    let keep_place = document.getElementById('keep_place');
    keep = keep_place.value
    if(value.indexOf('https://link.clashroyale.com/deck/en?deck=2') != -1 || value.indexOf('https://link.clashroyale.com/deck/jp?deck=2') != -1){
        localStorage.setItem("value"+keep,value);
        location.reload();
    }else{
        alert("入力したリンクが間違っています")
    }
    
}, false);

//『デッキを全部消去』ボタンの挙動
document.getElementById("link_button2").addEventListener("click", function () {
    localStorage.clear()  
    location.reload();      
}, false);
//『デッキを消去』ボタンの挙動
document.getElementById("link_button3").addEventListener("click", function () {
    let keep_place = document.getElementById('keep_place');
    keep = keep_place.value
    localStorage.removeItem("value"+keep)
    location.reload();      
}, false);

//リンクを設定
document.getElementById("link0").addEventListener("click",function (){
    var link = localStorage.getItem("value0");
    location.href=link
}, false);
document.getElementById("link1").addEventListener("click",function (){
    var link = localStorage.getItem("value1");
    location.href=link
}, false);
document.getElementById("link2").addEventListener("click",function (){
    var link = localStorage.getItem("value2");
    location.href=link
}, false);
document.getElementById("link3").addEventListener("click",function (){
    var link = localStorage.getItem("value3");
    location.href=link
}, false);
document.getElementById("link4").addEventListener("click",function (){
    var link = localStorage.getItem("value4");
    location.href=link
}, false);
document.getElementById("link5").addEventListener("click",function (){
    var link = localStorage.getItem("value5");
    location.href=link
}, false);
document.getElementById("link6").addEventListener("click",function (){
    var link = localStorage.getItem("value6");
    location.href=link
}, false);
document.getElementById("link7").addEventListener("click",function (){
    var link = localStorage.getItem("value7");
    location.href=link
}, false);
document.getElementById("link8").addEventListener("click",function (){
    var link = localStorage.getItem("value8");
    location.href=link
}, false);
document.getElementById("link9").addEventListener("click",function (){
    var link = localStorage.getItem("value9");
    location.href=link
}, false);
document.getElementById("link10").addEventListener("click",function (){
    var link = localStorage.getItem("value10");
    location.href=link
}, false);
document.getElementById("link11").addEventListener("click", function (){
	var link = localStorage.getItem("value11");
	location.href=link
}, false);
document.getElementById("link12").addEventListener("click", function (){
	var link = localStorage.getItem("value12");
	location.href=link
}, false);
document.getElementById("link13").addEventListener("click", function (){
	var link = localStorage.getItem("value13");
	location.href=link
}, false);
document.getElementById("link14").addEventListener("click", function (){
	var link = localStorage.getItem("value14");
	location.href=link
}, false);
document.getElementById("link15").addEventListener("click", function (){
	var link = localStorage.getItem("value15");
	location.href=link
}, false);
document.getElementById("link16").addEventListener("click", function (){
	var link = localStorage.getItem("value16");
	location.href=link
}, false);
document.getElementById("link17").addEventListener("click", function (){
	var link = localStorage.getItem("value17");
	location.href=link
}, false);
document.getElementById("link18").addEventListener("click", function (){
	var link = localStorage.getItem("value18");
	location.href=link
}, false);
document.getElementById("link19").addEventListener("click", function (){
	var link = localStorage.getItem("value19");
	location.href=link
}, false);
document.getElementById("link20").addEventListener("click", function (){
	var link = localStorage.getItem("value20");
	location.href=link
}, false);
document.getElementById("link21").addEventListener("click", function (){
	var link = localStorage.getItem("value21");
	location.href=link
}, false);
document.getElementById("link22").addEventListener("click", function (){
	var link = localStorage.getItem("value22");
	location.href=link
}, false);
document.getElementById("link23").addEventListener("click", function (){
	var link = localStorage.getItem("value23");
	location.href=link
}, false);
document.getElementById("link24").addEventListener("click", function (){
	var link = localStorage.getItem("value24");
	location.href=link
}, false);
document.getElementById("link25").addEventListener("click", function (){
	var link = localStorage.getItem("value25");
	location.href=link
}, false);
document.getElementById("link26").addEventListener("click", function (){
	var link = localStorage.getItem("value26");
	location.href=link
}, false);
document.getElementById("link27").addEventListener("click", function (){
	var link = localStorage.getItem("value27");
	location.href=link
}, false);
document.getElementById("link28").addEventListener("click", function (){
	var link = localStorage.getItem("value28");
	location.href=link
}, false);
document.getElementById("link29").addEventListener("click", function (){
	var link = localStorage.getItem("value29");
	location.href=link
}, false);
document.getElementById("link30").addEventListener("click", function (){
	var link = localStorage.getItem("value30");
	location.href=link
}, false);
document.getElementById("link31").addEventListener("click", function (){
	var link = localStorage.getItem("value31");
	location.href=link
}, false);
document.getElementById("link32").addEventListener("click", function (){
	var link = localStorage.getItem("value32");
	location.href=link
}, false);
document.getElementById("link33").addEventListener("click", function (){
	var link = localStorage.getItem("value33");
	location.href=link
}, false);
document.getElementById("link34").addEventListener("click", function (){
	var link = localStorage.getItem("value34");
	location.href=link
}, false);
document.getElementById("link35").addEventListener("click", function (){
	var link = localStorage.getItem("value35");
	location.href=link
}, false);
document.getElementById("link36").addEventListener("click", function (){
	var link = localStorage.getItem("value36");
	location.href=link
}, false);
document.getElementById("link37").addEventListener("click", function (){
	var link = localStorage.getItem("value37");
	location.href=link
}, false);
document.getElementById("link38").addEventListener("click", function (){
	var link = localStorage.getItem("value38");
	location.href=link
}, false);
document.getElementById("link39").addEventListener("click", function (){
	var link = localStorage.getItem("value39");
	location.href=link
}, false);
document.getElementById("link40").addEventListener("click", function (){
	var link = localStorage.getItem("value40");
	location.href=link
}, false);
document.getElementById("link41").addEventListener("click", function (){
	var link = localStorage.getItem("value41");
	location.href=link
}, false);
document.getElementById("link42").addEventListener("click", function (){
	var link = localStorage.getItem("value42");
	location.href=link
}, false);
document.getElementById("link43").addEventListener("click", function (){
	var link = localStorage.getItem("value43");
	location.href=link
}, false);
document.getElementById("link44").addEventListener("click", function (){
	var link = localStorage.getItem("value44");
	location.href=link
}, false);
document.getElementById("link45").addEventListener("click", function (){
	var link = localStorage.getItem("value45");
	location.href=link
}, false);
document.getElementById("link46").addEventListener("click", function (){
	var link = localStorage.getItem("value46");
	location.href=link
}, false);
document.getElementById("link47").addEventListener("click", function (){
	var link = localStorage.getItem("value47");
	location.href=link
}, false);
document.getElementById("link48").addEventListener("click", function (){
	var link = localStorage.getItem("value48");
	location.href=link
}, false);
document.getElementById("link49").addEventListener("click", function (){
	var link = localStorage.getItem("value49");
	location.href=link
}, false);

for(i=0;i<50;i++){
    if (localStorage.getItem("value"+i) === null) {
        let img_001 = document.getElementById("image_place"+i+"-1");
        img_001.src = "empty.jpg";
        let img_002 = document.getElementById("image_place"+i+"-2");
        img_002.src = "empty.jpg";
        let img_003 = document.getElementById("image_place"+i+"-3");
        img_003.src = "empty.jpg";
        let img_004 = document.getElementById("image_place"+i+"-4");
        img_004.src = "empty.jpg";
        let img_005 = document.getElementById("image_place"+i+"-5");
        img_005.src = "empty.jpg";
        let img_006 = document.getElementById("image_place"+i+"-6");
        img_006.src = "empty.jpg";
        let img_007 = document.getElementById("image_place"+i+"-7");
        img_007.src = "empty.jpg";
        let img_008 = document.getElementById("image_place"+i+"-8");
        img_008.src = "empty.jpg";
    }
    else{
        var link = localStorage.getItem("value"+i);
            var result = link.split(";")
            var result_0 = result[0].split("=")
            var result_8 = result[7].split("&")
            var img_1 = result_0[1]+".png"
            var img_2 = result[1]+".png"
            var img_3 = result[2]+".png"
            var img_4 = result[3]+".png"
            var img_5 = result[4]+".png"
            var img_6 = result[5]+".png"
            var img_7 = result[6]+".png"
            var img_8 = result_8[0]+".png"
            let img_001 = document.getElementById("image_place"+i+"-1");
            img_001.src = img_1;
            let img_002 = document.getElementById("image_place"+i+"-2");
            img_002.src = img_2;
            let img_003 = document.getElementById("image_place"+i+"-3");
            img_003.src = img_3;
            let img_004 = document.getElementById("image_place"+i+"-4");
            img_004.src = img_4;
            let img_005 = document.getElementById("image_place"+i+"-5");
            img_005.src = img_5;
            let img_006 = document.getElementById("image_place"+i+"-6");
            img_006.src = img_6;
            let img_007 = document.getElementById("image_place"+i+"-7");
            img_007.src = img_7;
            let img_008 = document.getElementById("image_place"+i+"-8");
            img_008.src = img_8;
    }
}