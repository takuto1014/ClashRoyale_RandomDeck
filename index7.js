//ランダムデッキ

card_all =[26000000,26000001,26000002,26000003,26000004,26000005,26000006,26000007,26000008,26000009,26000010,26000011,26000012,26000013,26000014,26000015,26000016,26000017,26000018,26000019,26000020,26000021,26000022,26000023,26000024,26000025,26000026,26000027,26000028,26000029,26000030,26000031,26000032,26000033,26000034,26000035,26000036,26000037,26000038,26000039,26000040,26000041,26000042,26000043,26000044,26000045,26000046,26000047,26000048,26000049,26000050,26000051,26000052,26000053,26000054,26000055,26000056,26000057,26000058,26000059,26000060,26000061,26000062,26000063,26000064,26000067,26000068,26000080,26000083,26000084,26000085,27000000,27000001,27000002,27000003,27000004,27000005,27000006,27000007,27000008,27000009,27000010,27000012,27000013,28000000,28000001,28000002,28000003,28000004,28000005,28000006,28000007,28000008,28000009,28000010,28000011,28000012,28000013,28000014,28000015,28000016,28000017,28000018]
card_elixir = [3,3,2,5,7,3,5,5,5,8,1,4,3,2,4,4,5,5,4,2,6,4,5,3,6,3,3,4,9,7,1,1,3,6,5,4,4,4,2,3,3,3,4,6,4,5,3,7,4,2,3,5,4,5,5,7,3,4,2,5,6,3,4,5,3,3,4,4,4,1,8,3,5,4,5,4,7,4,6,6,3,4,4,4,4,3,2,6,3,4, ,6,2,4,5,2,3,3,3,2,1,2,3]


document.getElementById("link7").addEventListener("click", function () {
  let elixir_range = document.getElementById('elixir_range');
  elixir = elixir_range.value
  let elixir_range2 = document.getElementById('elixir_range2');
  elixir_2 = elixir_range2.value
  if(elixir>elixir_2){
    alert("入力した値が間違っています")
  }else if(elixir<=elixir_2){

    a=0
    while(a<=1){

      /** 重複チェック用配列 */
      var randoms = [];
      /** 最小値と最大値 */
      var min = 0, max = 102;
      
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

      average_elixir = (card_elixir[randoms[0]]+card_elixir[randoms[1]]+card_elixir[randoms[2]]+card_elixir[randoms[3]]+card_elixir[randoms[4]]+card_elixir[randoms[5]]+card_elixir[randoms[6]]+card_elixir[randoms[7]])/8
      if( elixir <= average_elixir  && average_elixir <= elixir_2 ){
        location.href="https://link.clashroyale.com/deck/en?deck="+card_all[randoms[0]]+";"+card_all[randoms[1]]+";"+card_all[randoms[2]]+";"+card_all[randoms[3]]+";"+card_all[randoms[4]]+";"+card_all[randoms[5]]+";"+card_all[randoms[6]]+";"+card_all[randoms[7]]
        a=10
      }else{
        console.log("失敗"+a) 
      }
      
    }
    /*if(a==10001){
      alert("もう一度実行してください")
    } */
  }
})