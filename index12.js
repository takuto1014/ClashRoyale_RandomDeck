//トリプルドラフト練習
//カード全部
card_main = [26000003,26000006,26000009,26000021,26000024,26000029,26000036,26000051,26000055,26000058,26000059,26000060,26000067,26000085,27000002,27000008,27000013,28000004,28000010]
card_sky1 = [26000037,26000042,26000044,26000045,26000052,26000062,26000080,26000063,26000007,26000022,26000014,26000015,26000017,26000037]
card_sky2 = [26000019,26000039,26000040,26000049,26000057,26000064,26000023,26000026,26000001,26000005]
card_spell_1 = [28000000,28000003,28000005,28000007,28000009,28000014]
card_spell_2 = [28000001,28000008,28000011,28000012,28000015,28000017,28000018]
card_distraction = [27000009,26000056,26000002,26000010,26000030,26000031,26000084,28000016,26000012,26000025,26000041]
card_support_tank = [28000002,27000007,26000083,26000033,26000046,26000048,26000054,26000013,26000034]
card_anti_tank = [27000000,27000001,27000003,27000004,27000005,27000006,27000010,27000012,26000004,26000018,26000035,26000043,26000047,26000008]
card_tank = [26000000,26000016,26000032,26000038,26000053,26000061,26000068,26000011,26000027,26000050]

random_sort = parseInt(Math.floor(Math.random()*4))
if(random_sort == 0){
    card_sort = [card_main,card_sky1,card_sky2,card_spell_1,card_spell_2,card_support_tank,card_anti_tank,card_tank]
}else if(random_sort == 1){
    card_sort = [card_main,card_sky1,card_sky2,card_spell_1,card_spell_2,card_distraction,card_anti_tank,card_tank]
}else if(random_sort == 2){
    card_sort = [card_main,card_sky1,card_sky2,card_spell_1,card_spell_2,card_distraction,card_support_tank,card_tank]
}else{
    card_sort = [card_main,card_sky1,card_sky2,card_spell_1,card_spell_2,card_distraction,card_support_tank,card_anti_tank]
}

// function random_number(Max_Sort_Number){
//     /** 重複チェック用配列 */
//     var randoms = [];
//     /** 最小値と最大値 */
//     var min = 0, max = parseInt(card_sort[Max_Sort_Number].length)-1;
    
//     /** 重複チェックしながら乱数作成 */
//     for(i = min; i <= max; i++){
//     while(true){
//         var tmp = intRandom(min, max);
//         if(!randoms.includes(tmp)){
//         randoms.push(tmp);
//         break;
//         }
//     }
//     }
//     /** min以上max以下の整数値の乱数を返す */
//     function intRandom(min, max){
//     return Math.floor( Math.random() * (max - min + 1)) + min;
//     }

var count = 0
var card_all = []


function img(a){
    var randoms = [];
    /** 最小値と最大値 */
    var min =0, max = parseInt(card_sort[a].length)-1;
    
    /** 重複チェックしながら乱数作成 */
    for(i = min; i <= max; i++){
    while(true){
        var tmp = intRandom(min, max);
        if(!randoms.includes(tmp)){
        randoms.push(tmp);
        break;
        }
    }
    }
    /** min以上max以下の整数値の乱数を返す */
    function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
    }

    var img_0 = card_sort[a][randoms [0]]
    var img_1 = card_sort[a][randoms [1]]
    var img_2 = card_sort[a][randoms [2]]
    var img_3 = card_sort[a][randoms [3]]
    var img_4 = card_sort[a][randoms [4]]
    var img_5 = card_sort[a][randoms [5]]
    let img_000 = document.getElementById("image_place0");
    img_000.src = img_0+".png";
    let img_001 = document.getElementById("image_place1");
    img_001.src = img_1+".png";
    let img_002 = document.getElementById("image_place2");
    img_002.src = img_2+".png";
    let img_003 = document.getElementById("image_place3");
    img_003.src = img_3+".png";
    let img_004 = document.getElementById("image_place4");
    img_004.src = img_4+".png";
    let img_005 = document.getElementById("image_place5");
    img_005.src = img_5+".png";

    document.getElementById("button_0").addEventListener("click", function () {
        card_all.push(card_sort[a][randoms [3]])
        
    }, false);
    document.getElementById("button_1").addEventListener("click", function () {
        card_all.push(card_sort[a][randoms [4]])
        
    }, false); 
    document.getElementById("button_2").addEventListener("click", function () {
        card_all.push(card_sort[a][randoms [5]])
        
    }, false); 
}


function button(b){
    document.getElementById("button_0").addEventListener("click", function () {
        
        if(parseInt(b)<7){
        img(parseInt(b)+1)
        button(parseInt(b)+1)
        var img_10 = card_all[0]
        var img_11 = card_all[2]
        var img_12 = card_all[6]
        var img_13 = card_all[14]
        var img_14 = card_all[30]
        var img_15 = card_all[62]
        var img_16 = card_all[126]
        
        let img_010 = document.getElementById("image_place10");
        img_010.src = img_10+".png";
        let img_011 = document.getElementById("image_place11");
        img_011.src = img_11+".png";
        let img_012 = document.getElementById("image_place12");
        img_012.src = img_12+".png";
        let img_013 = document.getElementById("image_place13");
        img_013.src = img_13+".png";
        let img_014 = document.getElementById("image_place14");
        img_014.src = img_14+".png";
        let img_015 = document.getElementById("image_place15");
        img_015.src = img_15+".png";
        let img_016 = document.getElementById("image_place16");
        img_016.src = img_16+".png";
        let img_017 = document.getElementById("image_place17");
        img_017.src = img_17+".png";
        }else if(parseInt(b)==7){
            var img_10 = card_all[0]
            var img_11 = card_all[2]
            var img_12 = card_all[6]
            var img_13 = card_all[14]
            var img_14 = card_all[30]
            var img_15 = card_all[62]
            var img_16 = card_all[126]
            var img_17 = card_all[254]
            
            let img_010 = document.getElementById("image_place10");
            img_010.src = img_10+".png";
            let img_011 = document.getElementById("image_place11");
            img_011.src = img_11+".png";
            let img_012 = document.getElementById("image_place12");
            img_012.src = img_12+".png";
            let img_013 = document.getElementById("image_place13");
            img_013.src = img_13+".png";
            let img_014 = document.getElementById("image_place14");
            img_014.src = img_14+".png";
            let img_015 = document.getElementById("image_place15");
            img_015.src = img_15+".png";
            let img_016 = document.getElementById("image_place16");
            img_016.src = img_16+".png";
            let img_017 = document.getElementById("image_place17");
            img_017.src = img_17+".png";
        }
    }, false);
    document.getElementById("button_1").addEventListener("click", function () {
        if(parseInt(b)<7){
            img(parseInt(b)+1)
            button(parseInt(b)+1)
            var img_10 = card_all[0]
            var img_11 = card_all[2]
            var img_12 = card_all[6]
            var img_13 = card_all[14]
            var img_14 = card_all[30]
            var img_15 = card_all[62]
            var img_16 = card_all[126]
            
            let img_010 = document.getElementById("image_place10");
            img_010.src = img_10+".png";
            let img_011 = document.getElementById("image_place11");
            img_011.src = img_11+".png";
            let img_012 = document.getElementById("image_place12");
            img_012.src = img_12+".png";
            let img_013 = document.getElementById("image_place13");
            img_013.src = img_13+".png";
            let img_014 = document.getElementById("image_place14");
            img_014.src = img_14+".png";
            let img_015 = document.getElementById("image_place15");
            img_015.src = img_15+".png";
            let img_016 = document.getElementById("image_place16");
            img_016.src = img_16+".png";
            let img_017 = document.getElementById("image_place17");
            img_017.src = img_17+".png";
            }else if(parseInt(b)==7){
                var img_10 = card_all[0]
                var img_11 = card_all[2]
                var img_12 = card_all[6]
                var img_13 = card_all[14]
                var img_14 = card_all[30]
                var img_15 = card_all[62]
                var img_16 = card_all[126]
                var img_17 = card_all[254]
                
                let img_010 = document.getElementById("image_place10");
                img_010.src = img_10+".png";
                let img_011 = document.getElementById("image_place11");
                img_011.src = img_11+".png";
                let img_012 = document.getElementById("image_place12");
                img_012.src = img_12+".png";
                let img_013 = document.getElementById("image_place13");
                img_013.src = img_13+".png";
                let img_014 = document.getElementById("image_place14");
                img_014.src = img_14+".png";
                let img_015 = document.getElementById("image_place15");
                img_015.src = img_15+".png";
                let img_016 = document.getElementById("image_place16");
                img_016.src = img_16+".png";
                let img_017 = document.getElementById("image_place17");
                img_017.src = img_17+".png";
            }
    }, false); 
    document.getElementById("button_2").addEventListener("click", function () {
        if(parseInt(b)<7){
            img(parseInt(b)+1)
            button(parseInt(b)+1)
            var img_10 = card_all[0]
            var img_11 = card_all[2]
            var img_12 = card_all[6]
            var img_13 = card_all[14]
            var img_14 = card_all[30]
            var img_15 = card_all[62]
            var img_16 = card_all[126]
            
            let img_010 = document.getElementById("image_place10");
            img_010.src = img_10+".png";
            let img_011 = document.getElementById("image_place11");
            img_011.src = img_11+".png";
            let img_012 = document.getElementById("image_place12");
            img_012.src = img_12+".png";
            let img_013 = document.getElementById("image_place13");
            img_013.src = img_13+".png";
            let img_014 = document.getElementById("image_place14");
            img_014.src = img_14+".png";
            let img_015 = document.getElementById("image_place15");
            img_015.src = img_15+".png";
            let img_016 = document.getElementById("image_place16");
            img_016.src = img_16+".png";
            let img_017 = document.getElementById("image_place17");
            img_017.src = img_17+".png";
            }else if(parseInt(b)==7){
                var img_10 = card_all[0]
                var img_11 = card_all[2]
                var img_12 = card_all[6]
                var img_13 = card_all[14]
                var img_14 = card_all[30]
                var img_15 = card_all[62]
                var img_16 = card_all[126]
                var img_17 = card_all[254]
                
                let img_010 = document.getElementById("image_place10");
                img_010.src = img_10+".png";
                let img_011 = document.getElementById("image_place11");
                img_011.src = img_11+".png";
                let img_012 = document.getElementById("image_place12");
                img_012.src = img_12+".png";
                let img_013 = document.getElementById("image_place13");
                img_013.src = img_13+".png";
                let img_014 = document.getElementById("image_place14");
                img_014.src = img_14+".png";
                let img_015 = document.getElementById("image_place15");
                img_015.src = img_15+".png";
                let img_016 = document.getElementById("image_place16");
                img_016.src = img_16+".png";
                let img_017 = document.getElementById("image_place17");
                img_017.src = img_17+".png";
            }
    }, false); 
}

img(0)
button(0)



