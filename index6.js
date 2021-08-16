//1コス5枚シリーズ

card_main = [26000058,26000056,26000067,28000004,26000021,26000036,27000002,27000013,26000003,26000006,26000051,26000059,28000010,26000020,26000024,26000060,27000008,26000004,26000029,26000055,26000009,26000085,26000028]
card_air = [26000049,26000040,26000064]
card_spell = [28000000,28000002,28000008,28000011,28000015,28000017,28000001,28000012,28000018]

card_1 = parseInt(Math.floor(Math.random()*card_main.length))
card_2 = parseInt(Math.floor(Math.random()*card_air.length))
card_3 = parseInt(Math.floor(Math.random()*card_spell.length))
document.getElementById("link6").addEventListener("click", function () {
    location.reload();
    location.href="https://link.clashroyale.com/deck/en?deck=26000010;26000030;26000031;26000084;28000016;"+card_main[card_1]+";"+card_air[card_2]+";"+card_spell[card_3]
}, false);

