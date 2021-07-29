//トリプルドラフト風デッキ
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
        
        
        card_1 = parseInt(Math.floor(Math.random()*19))
        card_2 = parseInt(Math.floor(Math.random()*13))
        card_3 = parseInt(Math.floor(Math.random()*10))
        card_4 = parseInt(Math.floor(Math.random()*6 ))
        card_5 = parseInt(Math.floor(Math.random()*7 ))
        card_6 = parseInt(Math.floor(Math.random()*11))
        card_7 = parseInt(Math.floor(Math.random()*9 ))
        card_8 = parseInt(Math.floor(Math.random()*14))
        card_9 = parseInt(Math.floor(Math.random()*10))
        deck_2="いい感じのデッキ"
        document.write(deck_2.link("https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky[card_2]+";"+card_sky[card_3]+";"+card_tank[card_4]+";"+card_area[card_5]+";"+card_facility[card_6]+";"+card_spell_1[card_7]+";"+card_spell_2[card_8])  )
        random = parseInt(Math.floor(Math.random()*4+1))
        if(random==1){
            document.getElementById("link5").addEventListener("click", function () {
                location.href="https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky1[card_2]+";"+card_sky2[card_3]+";"+card_spell_1[card_4]+";"+card_spell_2[card_5]+";"+card_distraction[card_6]+";"+card_support_tank[card_7]+";"+card_anti_tank[card_8]
            }, false);
        }
        else if(random==2){
            document.getElementById("link5").addEventListener("click", function () {
                location.href="https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky1[card_2]+";"+card_sky2[card_3]+";"+card_spell_1[card_4]+";"+card_spell_2[card_5]+";"+card_distraction[card_6]+";"+card_support_tank[card_7]+";"+card_tank[card_9]
            }, false);
        }
        else if(random==3){
            document.getElementById("link5").addEventListener("click", function () {
                location.href="https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky1[card_2]+";"+card_sky2[card_3]+";"+card_spell_1[card_4]+";"+card_spell_2[card_5]+";"+card_distraction[card_6]+";"+card_anti_tank[card_8]+";"+card_tank[card_9]
            }, false);
        }
        else{
            document.getElementById("link5").addEventListener("click", function () {
                location.href="https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky1[card_2]+";"+card_sky2[card_3]+";"+card_spell_1[card_4]+";"+card_spell_2[card_5]+";"+card_support_tank[card_7]+";"+card_anti_tank[card_8]+";"+card_tank[card_9]
            }, false);
        }
