//ランダムデッキ

/** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 1, max = 102;
 
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
        
card_all =[26000000,26000001,26000002,26000003,26000004,26000005,26000006,26000007,26000008,26000009,26000010,26000011,26000012,26000013,26000014,26000015,26000016,26000017,26000018,26000019,26000020,26000021,26000022,26000023,26000024,26000025,26000026,26000027,26000028,26000029,26000030,26000031,26000032,26000033,26000034,26000035,26000036,26000037,26000038,26000039,26000040,26000041,26000042,26000043,26000044,26000045,26000046,26000047,26000048,26000049,26000050,26000051,26000052,26000053,26000054,26000055,26000056,26000057,26000058,26000059,26000060,26000061,26000062,26000063,26000064,26000067,26000068,26000080,26000083,26000084,26000085,27000000,27000001,27000002,27000003,27000004,27000005,27000006,27000007,27000008,27000009,27000010,27000012,27000013,28000000,28000001,28000002,28000003,28000004,28000005,28000006,28000007,28000008,28000009,28000010,28000011,28000012,28000013,28000014,28000015,28000016,28000017,28000018]

document.getElementById("link").addEventListener("click", function () {
    location.href="https://link.clashroyale.com/deck/en?deck="+card_all[randoms[0]]+";"+card_all[randoms[1]]+";"+card_all[randoms[2]]+";"+card_all[randoms[3]]+";"+card_all[randoms[4]]+";"+card_all[randoms[5]]+";"+card_all[randoms[6]]+";"+card_all[randoms[7]]
}, false);




document.getElementById("share").addEventListener("click", function () {
  navigator.share({
    title: document.title,
    text: デッキのリンクです,
    url: 'https://link.clashroyale.com/deck/en?deck=28000004;26000030;26000026;28000003;26000010;27000006;28000011;26000011',
})
.then(() => {
    console.log('Share completed successfuly')
})
.catch((error) => { console.log(`share failed: ${error}`) });        
}, false);


