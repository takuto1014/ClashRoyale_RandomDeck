      //メガナイトデッキ
      //対空(2つ分)
      var randoms_2 = [];
      var min = 0, max = 22;
      for(i = 1; i <=2 ; i++){
        while(true){
          var tmp = intRandom(min, max);
          if(!randoms_2.includes(tmp)){
            randoms_2.push(tmp);
            break;
          }
        }
      }
       function intRandom(min, max){
        return Math.floor( Math.random() * (max - min + 1)) + min;
      }
      
      //カード全部
      card_main = [26000003,26000004,26000006,26000009,26000020,26000021,26000024,26000028,26000029,26000032,26000036,26000051,26000055,26000056,26000058,26000059,26000060,26000067,26000085,27000002,27000008,27000013,28000004,28000010]
      card_sky1 = [26000037,26000042,26000044,26000045,26000052,26000062,26000080,26000063,26000007,26000022,26000014,26000015,26000017,26000037]
      card_sky2 = [26000019,26000039,26000040,26000049,26000057,26000064,26000023,26000026,26000001,26000005]
      card_tank = [26000000,26000002,26000010,26000016,26000018,26000030,26000031,26000033,26000035,26000038,26000043,26000046,26000047,26000048,26000053,26000054,26000061,26000068,26000084,28000016]
      card_area = [26000007,26000008,26000011,26000012,26000013,26000025,26000027,26000034,26000041,26000050]
      card_facility = [27000000,27000001,27000003,27000004,27000005,27000006,27000007,27000009,27000010,27000012]
      card_spell_1 = [28000000,28000003,28000005,28000007,28000009,28000014]
      card_spell_2 = [28000001,28000008,28000011,28000012,28000015,28000017,28000018]
              
    
    card_2 = parseInt(Math.floor(Math.random()*13))
    card_3 = parseInt(Math.floor(Math.random()*10))
    card_4 = parseInt(Math.floor(Math.random()*20))
    card_5 = parseInt(Math.floor(Math.random()*10))
    card_6 = parseInt(Math.floor(Math.random()*10))
    card_7 = parseInt(Math.floor(Math.random()*6))
    card_8 = parseInt(Math.floor(Math.random()*7))
    deck_4="メガナイトが大好きなあなたへのデッキ"
    document.write(deck_4.link("https://link.clashroyale.com/deck/en?deck=26000055;"+card_sky1[card_2]+";"+card_sky2[card_3]+";"+card_tank[card_4]+";"+card_area[card_5]+";"+card_facility[card_6]+";"+card_spell_1[card_7]+";"+card_spell_2[card_8])  )

    document.getElementById("link4").addEventListener("click", function () {
        parent.location.href="https://link.clashroyale.com/deck/en?deck=26000055;"+card_sky1[card_2]+";"+card_sky2[card_3]+";"+card_tank[card_4]+";"+card_area[card_5]+";"+card_facility[card_6]+";"+card_spell_1[card_7]+";"+card_spell_2[card_8]
    }, false);

    document.getElementById("link4-2").addEventListener("click", function () {
        location.href="https://link.clashroyale.com/deck/en?deck=28000004;26000041;26000030;26000000;26000026;28000003;27000006;28000011"
    }, false);
