
    document.getElementById("link_button").addEventListener("click", function () {
        const textbox = document.getElementById("link")
        const value = textbox.value
        if(value.indexOf('https://link.clashroyale.com/deck/en?deck=2') != -1 || value.indexOf('https://link.clashroyale.com/deck/jp?deck=2') != -1){
            var number = localStorage.length
            localStorage.setItem('key'+number, value);
            location.reload();
        }else{
            alert("入力したリンクが間違っています")
        }
        
    }, false);
    
    document.getElementById("link_button2").addEventListener("click", function () {
        localStorage.clear()  
        location.reload();      
    }, false);

    var number = localStorage.length
    for(i=1;i<number;i++){
        //リンクを設定
        document.getElementById("link"+i).addEventListener("click", function () {
            var link = localStorage.getItem('key'+i);
            location.href=link
        }, false);
        
        //画像を表示
        var link = localStorage.getItem('key'+i);
        var result = link.split(";")
        var result_0 = result[0].split("=")
        var result_8 = result[7].split("&")
        //alert(result_0[1] + result[1])
        var img_1 = result_0[1]+".png"
        var img_2 = result[1]+".png"
        var img_3 = result[2]+".png"
        var img_4 = result[3]+".png"
        var img_5 = result[4]+".png"
        var img_6 = result[5]+".png"
        var img_7 = result[6]+".png"
        var img_8 = result_8[0]+".png"
        let img_01 = document.getElementById("image_place"+i+"-1");
        img_01.src = img_1;
        let img_02 = document.getElementById("image_place"+i+"-2");
        img_02.src = img_2;
        let img_03 = document.getElementById("image_place"+i+"-3");
        img_03.src = img_3;
        let img_04 = document.getElementById("image_place"+i+"-4");
        img_04.src = img_4;
        let img_05 = document.getElementById("image_place"+i+"-5");
        img_05.src = img_5;
        let img_06 = document.getElementById("image_place"+i+"-6");
        img_06.src = img_6;
        let img_07 = document.getElementById("image_place"+i+"-7");
        img_07.src = img_7;
        let img_08 = document.getElementById("image_place"+i+"-8");
        img_08.src = img_8;
    }
