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
// card_sort = [card_main,card_sky1,card_sky2,card_spell_1,card_spell_2,card_distraction,card_support_tank,card_anti_tank]



    /** 重複チェック用配列 */
    var randoms = [];
    /** 最小値と最大値 */
    var min =0, max = parseInt(card_sort[0].length)-1;
    
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

        var img_0 = card_sort[0][randoms [0]]
        var img_1 = card_sort[0][randoms [1]]
        var img_2 = card_sort[0][randoms [2]]
        var img_3 = card_sort[0][randoms [3]]
        var img_4 = card_sort[0][randoms [4]]
        var img_5 = card_sort[0][randoms [5]]
        function random1(number1){
            card1 = card_sort[0][randoms [parseInt(number1)]]
        }
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
        for(a=0;a<3;a++){
            document.getElementById("button_"+a).addEventListener("click", function () {
                random1(a)

                //------------------------------------------------------------------------------
                //------------------------------------------------------------------------------
                //------------------------------------------------------------------------------
                //------------------------------------------------------------------------------
                //------------------------------------------------------------------------------
                //------------------------------------------------------------------------------
                /** 重複チェック用配列 */
                var randoms2 = [];
                /** 最小値と最大値 */
                var min = 0, max = parseInt(card_sort[1].length)-1;
                
                /** 重複チェックしながら乱数作成 */
                for(i = min; i <= max; i++){
                while(true){
                    var tmp = intRandom(min, max);
                    if(!randoms2.includes(tmp)){
                    randoms2.push(tmp);
                    break;
                    }
                }
                }
                /** min以上max以下の整数値の乱数を返す */
                function intRandom(min, max){
                return Math.floor( Math.random() * (max - min + 1)) + min;
                }

                    var img_0 = card_sort[1][randoms2 [0]]
                    var img_1 = card_sort[1][randoms2 [1]]
                    var img_2 = card_sort[1][randoms2 [2]]
                    var img_3 = card_sort[1][randoms2 [3]]
                    var img_4 = card_sort[1][randoms2 [4]]
                    var img_5 = card_sort[1][randoms2 [5]]
                    function random2(number2){
                        card2 = card_sort[1][randoms2 [parseInt(number2)+3]]
                    }
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
                    for(b=0;b<3;b++){
                        document.getElementById("button_"+b).addEventListener("click", function () {
                            random2(b)
                            //------------------------------------------------------------------------------
                            //------------------------------------------------------------------------------
                            //------------------------------------------------------------------------------
                            //------------------------------------------------------------------------------
                            //------------------------------------------------------------------------------
                            //------------------------------------------------------------------------------
                            var randoms = [];
                            /** 最小値と最大値 */
                            var min = 0, max = parseInt(card_sort[2].length)-1;
                            
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
            
                                var img_0 = card_sort[2][randoms [0]]
                                var img_1 = card_sort[2][randoms [1]]
                                var img_2 = card_sort[2][randoms [2]]
                                var img_3 = card_sort[2][randoms [3]]
                                var img_4 = card_sort[2][randoms [4]]
                                var img_5 = card_sort[2][randoms [5]]
                                function random3(number3){
                                    card3 = card_sort[2][randoms [parseInt(number3)]]
                                }
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
                                for(c=0;c<3;c++){
                                    document.getElementById("button_"+c).addEventListener("click", function () {
                                        random3(parseInt(c)+3)
                                        //------------------------------------------------------------------------------
                                        //------------------------------------------------------------------------------
                                        //------------------------------------------------------------------------------
                                        //------------------------------------------------------------------------------
                                        //------------------------------------------------------------------------------
                                        //------------------------------------------------------------------------------
                                        var randoms = [];
                                        /** 最小値と最大値 */
                                        var min = 0, max = parseInt(card_sort[3].length)-1;
                                        
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
                        
                                            var img_0 = card_sort[3][randoms [0]]
                                            var img_1 = card_sort[3][randoms [1]]
                                            var img_2 = card_sort[3][randoms [2]]
                                            var img_3 = card_sort[3][randoms [3]]
                                            var img_4 = card_sort[3][randoms [4]]
                                            var img_5 = card_sort[3][randoms [5]]
                                            function random4(number4){
                                                card4 = card_sort[3][randoms [parseInt(number4)]]
                                            }
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
                                            for(d=0;d<3;d++){
                                                document.getElementById("button_"+d).addEventListener("click", function () {
                                                    random4(d)
                                                    //------------------------------------------------------------------------------
                                                    //------------------------------------------------------------------------------
                                                    //------------------------------------------------------------------------------
                                                    //------------------------------------------------------------------------------
                                                    //------------------------------------------------------------------------------
                                                    //------------------------------------------------------------------------------
                                                    var randoms = [];
                                                    /** 最小値と最大値 */
                                                    var min = 0, max = parseInt(card_sort[4].length)-1;
                                                    
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
                                    
                                                        var img_0 = card_sort[4][randoms [0]]
                                                        var img_1 = card_sort[4][randoms [1]]
                                                        var img_2 = card_sort[4][randoms [2]]
                                                        var img_3 = card_sort[4][randoms [3]]
                                                        var img_4 = card_sort[4][randoms [4]]
                                                        var img_5 = card_sort[4][randoms [5]]
                                                        function random5(number5){
                                                            card5 = card_sort[4][randoms [parseInt(number5)]]
                                                        }
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
                                                        for(e=0;e<3;e++){
                                                            document.getElementById("button_"+e).addEventListener("click", function () {
                                                            random5(e)
                                                            //------------------------------------------------------------------------------
                                                            //------------------------------------------------------------------------------
                                                            //------------------------------------------------------------------------------
                                                            //------------------------------------------------------------------------------
                                                            //------------------------------------------------------------------------------
                                                            //------------------------------------------------------------------------------
                                                            var randoms = [];
                                                            /** 最小値と最大値 */
                                                            var min = 0, max = parseInt(card_sort[5].length)-1;
                                                            
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
                                            
                                                                var img_0 = card_sort[5][randoms [0]]
                                                                var img_1 = card_sort[5][randoms [1]]
                                                                var img_2 = card_sort[5][randoms [2]]
                                                                var img_3 = card_sort[5][randoms [3]]
                                                                var img_4 = card_sort[5][randoms [4]]
                                                                var img_5 = card_sort[5][randoms [5]]
                                                                function random6(number6){
                                                                    card6 = card_sort[5][randoms [parseInt(number6)]]
                                                                }
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
                                                                for(f=0;f<3;f++){
                                                                    document.getElementById("button_"+f).addEventListener("click", function () {
                                                                    random6(f)
                                                                    //------------------------------------------------------------------------------
                                                                    //------------------------------------------------------------------------------
                                                                    //------------------------------------------------------------------------------
                                                                    //------------------------------------------------------------------------------
                                                                    //------------------------------------------------------------------------------
                                                                    //------------------------------------------------------------------------------
                                                                    var randoms = [];
                                                                    /** 最小値と最大値 */
                                                                    var min = 0, max = parseInt(card_sort[6].length)-1;
                                                                    
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

                                                                        
                                                                        var img_0 = card_sort[6][randoms [0]]
                                                                        var img_1 = card_sort[6][randoms [1]]
                                                                        var img_2 = card_sort[6][randoms [2]]
                                                                        var img_3 = card_sort[6][randoms [3]]
                                                                        var img_4 = card_sort[6][randoms [4]]
                                                                        var img_5 = card_sort[6][randoms [5]]
                                                                        function random7(number7){
                                                                            card7 = card_sort[6][randoms [parseInt(number7)]]
                                                                        }
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
                                                                        for(g=0;g<3;g++){
                                                                            document.getElementById("button_"+g).addEventListener("click", function () {
                                                                            random7(g)
                                                                            // random7(parseInt(g)+3)
                                                                            // card7 = "aiueo"

                                                                            //------------------------------------------------------------------------------
                                                                            //------------------------------------------------------------------------------
                                                                            //------------------------------------------------------------------------------
                                                                            //------------------------------------------------------------------------------
                                                                            //------------------------------------------------------------------------------
                                                                            //------------------------------------------------------------------------------
                                                                            var randoms = [];
                                                                            /** 最小値と最大値 */
                                                                            var min = 0, max = parseInt(card_sort[7].length)-1;
                                                                            
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
                                                            
                                                                                var img_0 = card_sort[7][randoms [0]]
                                                                                var img_1 = card_sort[7][randoms [1]]
                                                                                var img_2 = card_sort[7][randoms [2]]
                                                                                var img_3 = card_sort[7][randoms [3]]
                                                                                var img_4 = card_sort[7][randoms [4]]
                                                                                var img_5 = card_sort[7][randoms [5]]
                                                                                
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
                                                                                    var card8 = img_3
                                                                                    
                                                                                    let img_000 = document.getElementById("image_place0");
                                                                                    img_000.src = "";
                                                                                    let img_001 = document.getElementById("image_place1");
                                                                                    img_001.src = ""
                                                                                    let img_002 = document.getElementById("image_place2");
                                                                                    img_002.src = ""
                                                                                    let img_003 = document.getElementById("image_place3");
                                                                                    img_003.src = ""
                                                                                    let img_004 = document.getElementById("image_place4");
                                                                                    img_004.src = ""
                                                                                    let img_005 = document.getElementById("image_place5");
                                                                                    img_005.src = ""

                                                                                    var img_10 = card1
                                                                                    var img_11 = card2
                                                                                    var img_12 = card3
                                                                                    var img_13 = card4
                                                                                    var img_14 = card5
                                                                                    var img_15 = card6
                                                                                    var img_16 = card7
                                                                                    var img_17 = card8
                                                                                    
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
                                                                                }, false); 
                                                                                document.getElementById("button_1").addEventListener("click", function () {
                                                                                    var card8 = img_4
                                                                                    let img_000 = document.getElementById("image_place0");
                                                                                    img_000.src = "";
                                                                                    let img_001 = document.getElementById("image_place1");
                                                                                    img_001.src = ""
                                                                                    let img_002 = document.getElementById("image_place2");
                                                                                    img_002.src = ""
                                                                                    let img_003 = document.getElementById("image_place3");
                                                                                    img_003.src = ""
                                                                                    let img_004 = document.getElementById("image_place4");
                                                                                    img_004.src = ""
                                                                                    let img_005 = document.getElementById("image_place5");
                                                                                    img_005.src = ""

                                                                                    var img_10 = card1
                                                                                    var img_11 = card2
                                                                                    var img_12 = card3
                                                                                    var img_13 = card4
                                                                                    var img_14 = card5
                                                                                    var img_15 = card6
                                                                                    var img_16 = card7
                                                                                    var img_17 = card8
                                                                                    
                                                                                    
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
                                                                                }, false); 
                                                                                document.getElementById("button_2").addEventListener("click", function () {
                                                                                    var card8 = img_5
                                                                                    let img_000 = document.getElementById("image_place0");
                                                                                    img_000.src = "";
                                                                                    let img_001 = document.getElementById("image_place1");
                                                                                    img_001.src = ""
                                                                                    let img_002 = document.getElementById("image_place2");
                                                                                    img_002.src = ""
                                                                                    let img_003 = document.getElementById("image_place3");
                                                                                    img_003.src = ""
                                                                                    let img_004 = document.getElementById("image_place4");
                                                                                    img_004.src = ""
                                                                                    let img_005 = document.getElementById("image_place5");
                                                                                    img_005.src = ""

                                                                                    var img_10 = card1
                                                                                    var img_11 = card2
                                                                                    var img_12 = card3
                                                                                    var img_13 = card4
                                                                                    var img_14 = card5
                                                                                    var img_15 = card6
                                                                                    var img_16 = card7
                                                                                    var img_17 = card8
                                                                                    
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
                                                                                }, false); 
                                                                                // for(h=0;h<3;h++){
                                                                                //     document.getElementById("button_"+h).addEventListener("click", function () {
                                                                                //     var card8 = "img_"+h
                                                                                //     }, false); 
                                                                                // }
                                                                            }, false);
                                                                        }
                                                                    }, false);
                                                                }
                                                            }, false);
                                                        }
                                                }, false);
                                            }
                                    }, false);
                                }    
                        }, false);
                    }
            }, false);
    }

