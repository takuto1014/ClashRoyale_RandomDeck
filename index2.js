//バランス良いデッキ
//カード全部
card_main = [26000003,26000004,26000006,26000009,26000020,26000021,26000024,26000028,26000029,26000032,26000036,26000051,26000055,26000056,26000058,26000059,26000060,26000067,26000085,27000002,27000008,27000013,28000004,28000010]
card_sky = [26000001,26000005,26000014,26000015,26000017,26000019,26000022,26000023,26000026,26000037,26000039,26000040,26000042,26000044,26000045,26000049,26000052,26000057,26000062,26000063,26000064,26000080,26000083]
card_tank = [26000000,26000002,26000010,26000016,26000018,26000030,26000031,26000033,26000035,26000038,26000043,26000046,26000047,26000048,26000053,26000054,26000061,26000068,26000084,28000016]
card_area        = [26000007,26000008,26000011,26000012,26000013,26000025,26000027,26000034,26000041,26000050]
card_facilities  = [27000000,27000001,27000003,27000004,27000005,27000006,27000007,27000009,27000010,27000012]
card_spell_small = [28000001,28000002,28000008,28000011,28000012,28000015,28000017,28000018]
card_spell_big   = [28000000,28000003,28000005,28000006,28000007,28000009,28000013,28000014]
        
//対空(2つ分)
/** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 0, max = 21;
 
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
        
        card_1 = parseInt(Math.floor(Math.random()*24))
        card_2 = randoms[0]
        card_3 = randoms[20]
        card_4 = parseInt(Math.floor(Math.random()*22 ))
        card_5 = parseInt(Math.floor(Math.random()*10 ))
        card_6 = parseInt(Math.floor(Math.random()*10))
        card_7 = parseInt(Math.floor(Math.random()*8 ))
        card_8 = parseInt(Math.floor(Math.random()*8))
        
        //deck_2="いい感じのデッキ"
        //document.write(deck_2.link("https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky[card_2]+";"+card_sky[card_3]+";"+card_tank[card_4]+";"+card_area[card_5]+";"+card_facility[card_6]+";"+card_spell_1[card_7]+";"+card_spell_2[card_8])  )
        //random = parseInt(Math.floor(Math.random()*4+1))
        
        document.getElementById("link2").addEventListener("click", function () {
            location.href="https://link.clashroyale.com/deck/en?deck="+card_main[card_1]+";"+card_sky[card_2]+";"+card_sky[card_3]+";"+card_tank[card_4]+";"+card_area[card_5]+";"+card_facilities[card_6]+";"+card_spell_small[card_7]+";"+card_spell_big[card_8]
        }, false);
        
