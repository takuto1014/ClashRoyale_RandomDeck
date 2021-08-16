      //主軸選択デッキ
    document.getElementById("link4").addEventListener("click", function () {
      card_spell1   = [28000000,28000003,28000005,28000006,28000007,28000009,28000013,28000014]
      card_spell2   = [28000001,28000002,28000008,28000011,28000012,28000015,28000017,28000018]
      card_facility = [27000000,27000001,27000003,27000004,27000005,27000006,27000007,27000009,27000010,27000012]
      card_main     = [26000056,26000004,26000020,26000028,26000003,26000006,26000009,26000021,26000024,26000029,26000036,26000051,26000055,26000058,26000059,26000060,26000067,26000085,27000002,27000008,27000013,28000004,28000010]
      card_air1     = [26000019,26000039,26000040,26000049,26000057,26000064,26000023,26000026,26000001,26000005]
      card_air2     = [26000042,26000044,26000045,26000052,26000062,26000080,26000063,26000007,26000022,26000014,26000015,26000017]
      card_tank     = [26000002,26000010,26000030,26000031,26000084,28000016,26000033,26000046,26000048,26000054,26000018,26000035,26000043,26000047,26000000,26000016,26000032,26000038,26000053,26000061,26000068]
      card_area     = [26000007,26000012,26000025,26000041,26000013,26000034,26000008,26000011,26000027,26000050]
      
      text = document.getElementById("maincard")
      value = text.value
      card1 = Math.floor(parseInt(Math.random()*card_spell1.length))
      card2 = Math.floor(parseInt(Math.random()*card_spell2.length))
      card3 = Math.floor(parseInt(Math.random()*card_facility.length))
      card4 = Math.floor(parseInt(Math.random()*card_air1.length))
      card5 = Math.floor(parseInt(Math.random()*card_air2.length))
      card6 = Math.floor(parseInt(Math.random()*card_tank.length))
      card7 = Math.floor(parseInt(Math.random()*card_area.length))
      
      
      location.href="https://link.clashroyale.com/deck/en?deck="+card_main[value]+";"+card_spell1[card1]+";"+card_spell2[card2]+";"+card_facility[card3]+";"+card_air1[card4]+";"+card_air2[card5]+";"+card_tank[card6]+";"+card_area[card7]
    }, false);