document.getElementById("link_button").addEventListener("click", function () {
    var Link_Old = document.getElementById("link0")
    var Link = Link_Old.value
    if(Link.indexOf('https://link.clashroyale.com/deck/en?deck=2') != -1 || Link.indexOf('https://link.clashroyale.com/deck/jp?deck=2') != -1){
        //リンクを番号ごとにLink_Number配列に格納
        var Link_Number = Link.split(";")
        var asdfjkl1 = Link_Number[0].split("=")
        Link_Number.shift();
        Link_Number.unshift(asdfjkl1[1])
        var asdfjkl2 = Link_Number[7].split("&")
        Link_Number.pop();
        Link_Number.push(asdfjkl2[0])   
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //平均エリクサーを算出
        var Card_Number_All = [26000000,26000001,26000002,26000003,26000004,26000005,26000006,26000007,26000008,26000009,26000010,26000011,26000012,26000013,26000014,26000015,26000016,26000017,26000018,26000019,26000020,26000021,26000022,26000023,26000024,26000025,26000026,26000027,26000028,26000029,26000030,26000031,26000032,26000033,26000034,26000035,26000036,26000037,26000038,26000039,26000040,26000041,26000042,26000043,26000044,26000045,26000046,26000047,26000048,26000049,26000050,26000051,26000052,26000053,26000054,26000055,26000056,26000057,26000058,26000059,26000060,26000061,26000062,26000063,26000064,26000067,26000068,26000080,26000083,26000084,26000085,27000000,27000001,27000002,27000003,27000004,27000005,27000006,27000007,27000008,27000009,27000010,27000012,27000013,28000000,28000001,28000002,28000003,28000004,28000005,28000006,28000007,28000008,28000009,28000010,28000011,28000012,28000013,28000014,28000015,28000016,28000017,28000018]
        var Card_Elixir_All = [3,3,2,5,7,3,5,5,5,8,1,4,3,2,4,4,5,5,4,2,6,4,5,3,6,3,3,4,9,7,1,1,3,6,5,4,4,4,2,3,3,3,4,6,4,5,3,7,4,2,3,5,4,5,5,7,3,4,2,5,6,3,4,5,3,3,4,4,4,1,8,3,5,4,5,4,7,4,6,6,3,4,4,4,4,3,2,6,3,4,0,6,2,4,5,2,3,3,3,2,1,2,3]
        if(Link_Number.includes("28000006") == true){
            var Average_Elixir1 = (Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[0]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[1]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[2]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[3]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[4]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[5]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[6]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[7]))])
            var Average_Elixir = (Average_Elixir1+(Average_Elixir1/7))/8
        }else{
        var Average_Elixir = (Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[0]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[1]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[2]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[3]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[4]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[5]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[6]))]+Card_Elixir_All[Card_Number_All.indexOf(parseInt(Link_Number[7]))])/8
        }
        alert(Average_Elixir)
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //各変数を用意
        // Link デッキに含まれている要素
        var Link_Sort_Land = 0
        var Link_Sort_Air = 0
        var Link_Sort_Facility_Defense = 0
        var Link_Sort_Facility_Attack = 0
        var Link_Sort_Facility_Create = 0
        var Link_Sort_Facility_Unique = 0
        var Link_Sort_Spell_Small = 0
        var Link_Sort_Spell_Big = 0
        var Link_Sort_Spell_Create = 0
        var Link_Sort_Spell_Special = 0
        var Link_Target_Land = 0
        var Link_Target_Air = 0
        var Link_Target_Tower = 0
        var Link_Effect_Zap = 0
        var Link_Effect_Inferno = 0
        var Link_Effect_Delay = 0
        var Link_Effect_KnockBack = 0
        var Link_Effect_Recovery = 0
        var Link_Effect_Bomb = 0
        var Link_Effect_Freeze = 0
        var Link_Support_Clone = 0
        var Link_Support_SkeletonRush = 0
        var Link_Support_Lava = 0
        var Link_Support_Balloon = 0
        var Link_Support_Golem = 0
        var Link_Support_RoyaleGiant = 0
        var Link_Death_Zap = 0
        var Link_Death_Barbarian = 0
        var Link_Death_Earthquake = 0
        var Link_Death_Wood = 0
        var Link_Death_Tornado = 0
        var Link_Death_ArrowRain = 0
        var Link_Death_Delivery = 0
        var Link_Death_Fireball = 0
        var Link_Death_Poison = 0
        var Link_Death_Lightning = 0
        var Link_Death_Rocket = 0
        var Link_Anti_Small = 0
        var Link_Anti_Big_Land = 0
        var Link_Anti_Big_Attack = 0
        var Link_Anti_Clone = 0
        var Link_Attack_Air_Long = 0
        var Link_Attack_Air_Short = 0
        var Link_Attack_Air_HighPower = 0
        var Link_Attack_Air_Area = 0
        var Link_Attack_Air_Small = 0
        var Link_Attack_Air_Multiple = 0
        var Link_Attack_Land_Long = 0
        var Link_Attack_Land_Short = 0
        var Link_Attack_Land_HighPower = 0
        var Link_Attack_Land_Area = 0
        var Link_Attack_Tank = 0
        var Link_Attack_Big_Land = 0
        var Link_Attack_Big_Attack = 0
        var Link_Attack_Big_Air = 0
        var Link_Attack_Single = 0
        var Link_Attack_Area = 0
        var Link_Attack_Group = 0
        var Link_Attack_Small = 0
        var Link_Attack_Tower = 0
        var Link_Attack_Skeleton = 0
        var Link_Attack_Spirit = 0
        var Link_MNWIN = 0

        // カードに含まれている要素から、生成のための要素を追加
        var Count_Sort_Land = 0
        var Count_Sort_Air = 0
        var Count_Sort_Facility_Defense = 0
        var Count_Sort_Facility_Attack = 0
        var Count_Sort_Facility_Create = 0
        var Count_Sort_Facility_Unique = 0
        var Count_Sort_Spell_Small = 0
        var Count_Sort_Spell_Big = 0
        var Count_Sort_Spell_Create = 0
        var Count_Sort_Spell_Special = 0
        var Count_Target_Land = 0
        var Count_Target_Air = 0
        var Count_Target_Tower = 0
        var Count_Effect_Zap = 0
        var Count_Effect_Inferno = 0
        var Count_Effect_Delay = 0
        var Count_Effect_KnockBack = 0
        var Count_Effect_Recovery = 0
        var Count_Effect_Bomb = 0
        var Count_Effect_Freeze = 0
        var Count_Support_Clone = 0
        var Count_Support_SkeletonRush = 0
        var Count_Support_Lava = 0
        var Count_Support_Balloon = 0
        var Count_Support_Golem = 0
        var Count_Support_RoyaleGiant = 0
        var Count_Death_Zap = 0
        var Count_Death_Barbarian = 0
        var Count_Death_Earthquake = 0
        var Count_Death_Wood = 0
        var Count_Death_Tornado = 0
        var Count_Death_ArrowRain = 0
        var Count_Death_Delivery = 0
        var Count_Death_Fireball = 0
        var Count_Death_Poison = 0
        var Count_Death_Lightning = 0
        var Count_Death_Rocket = 0
        var Count_Anti_Small = 0
        var Count_Anti_Big_Land = 0
        var Count_Anti_Big_Attack = 0
        var Count_Anti_Clone = 0
        var Count_Attack_Air_Long = 0
        var Count_Attack_Air_Short = 0
        var Count_Attack_Air_HighPower = 0
        var Count_Attack_Air_Area = 0
        var Count_Attack_Air_Small = 0
        var Count_Attack_Air_Multiple = 0
        var Count_Attack_Land_Long = 0
        var Count_Attack_Land_Short = 0
        var Count_Attack_Land_HighPower = 0
        var Count_Attack_Land_Area = 0
        var Count_Attack_Tank = 0
        var Count_Attack_Big_Land = 0
        var Count_Attack_Big_Attack = 0
        var Count_Attack_Big_Air = 0
        var Count_Attack_Single = 0
        var Count_Attack_Area = 0
        var Count_Attack_Group = 0
        var Count_Attack_Small = 0
        var Count_Attack_Tower = 0
        var Count_Attack_Skeleton = 0
        var Count_Attack_Spirit = 0
        var Count_Attack_MNWIN = 0
        
        var Count_26000000 = 0
        var Count_26000001 = 0
        var Count_26000002 = 0
        var Count_26000003 = 0
        var Count_26000004 = 0
        var Count_26000005 = 0
        var Count_26000006 = 0
        var Count_26000007 = 0
        var Count_26000008 = 0
        var Count_26000009 = 0
        var Count_26000010 = 0
        var Count_26000011 = 0
        var Count_26000012 = 0
        var Count_26000013 = 0
        var Count_26000014 = 0
        var Count_26000015 = 0
        var Count_26000016 = 0
        var Count_26000017 = 0
        var Count_26000018 = 0
        var Count_26000019 = 0
        var Count_26000020 = 0
        var Count_26000021 = 0
        var Count_26000022 = 0
        var Count_26000023 = 0
        var Count_26000024 = 0
        var Count_26000025 = 0
        var Count_26000026 = 0
        var Count_26000027 = 0
        var Count_26000028 = 0
        var Count_26000029 = 0
        var Count_26000030 = 0
        var Count_26000031 = 0
        var Count_26000032 = 0
        var Count_26000033 = 0
        var Count_26000034 = 0
        var Count_26000035 = 0
        var Count_26000036 = 0
        var Count_26000037 = 0
        var Count_26000038 = 0
        var Count_26000039 = 0
        var Count_26000040 = 0
        var Count_26000041 = 0
        var Count_26000042 = 0
        var Count_26000043 = 0
        var Count_26000044 = 0
        var Count_26000045 = 0
        var Count_26000046 = 0
        var Count_26000047 = 0
        var Count_26000048 = 0
        var Count_26000049 = 0
        var Count_26000050 = 0
        var Count_26000051 = 0
        var Count_26000052 = 0
        var Count_26000053 = 0
        var Count_26000054 = 0
        var Count_26000055 = 0
        var Count_26000056 = 0
        var Count_26000057 = 0
        var Count_26000058 = 0
        var Count_26000059 = 0
        var Count_26000060 = 0
        var Count_26000061 = 0
        var Count_26000062 = 0
        var Count_26000063 = 0
        var Count_26000064 = 0
        var Count_26000067 = 0
        var Count_26000068 = 0
        var Count_26000080 = 0
        var Count_26000083 = 0
        var Count_26000084 = 0
        var Count_26000085 = 0
        var Count_27000000 = 0
        var Count_27000001 = 0
        var Count_27000002 = 0
        var Count_27000003 = 0
        var Count_27000004 = 0
        var Count_27000005 = 0
        var Count_27000006 = 0
        var Count_27000007 = 0
        var Count_27000008 = 0
        var Count_27000009 = 0
        var Count_27000010 = 0
        var Count_27000012 = 0
        var Count_27000013 = 0
        var Count_28000000 = 0
        var Count_28000001 = 0
        var Count_28000002 = 0
        var Count_28000003 = 0
        var Count_28000004 = 0
        var Count_28000005 = 0
        var Count_28000006 = 0
        var Count_28000007 = 0
        var Count_28000008 = 0
        var Count_28000009 = 0
        var Count_28000010 = 0
        var Count_28000011 = 0
        var Count_28000012 = 0
        var Count_28000013 = 0
        var Count_28000014 = 0
        var Count_28000015 = 0
        var Count_28000016 = 0
        var Count_28000017 = 0
        var Count_28000018 = 0
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //各関数を用意
        function Fun_Link_Sort_Land(Number){
            Link_Sort_Land += Number
        }
        function Fun_Link_Sort_Air(Number){
            Link_Sort_Air += Number
        }
        function Fun_Link_Sort_Facility_Defense(Number){
            Link_Sort_Facility_Defense += Number
        }
        function Fun_Link_Sort_Facility_Attack(Number){
            Link_Sort_Facility_Attack += Number
        }
        function Fun_Link_Sort_Facility_Create(Number){
            Link_Sort_Facility_Create += Number
        }
        function Fun_Link_Sort_Facility_Unique(Number){
            Link_Sort_Facility_Unique += Number
        }
        function Fun_Link_Sort_Spell_Small(Number){
            Link_Sort_Spell_Small += Number
        }
        function Fun_Link_Sort_Spell_Big(Number){
            Link_Sort_Spell_Big += Number
        }
        function Fun_Link_Sort_Spell_Create(Number){
            Link_Sort_Spell_Create += Number
        }
        function Fun_Link_Sort_Spell_Special(Number){
            Link_Sort_Spell_Special += Number
        }
        function Fun_Link_Target_Land(Number){
            Link_Target_Land += Number
        }
        function Fun_Link_Target_Air(Number){
            Link_Target_Air += Number
        }
        function Fun_Link_Target_Tower(Number){
            Link_Target_Tower += Number
        }
        function Fun_Link_Effect_Zap(Number){
            Link_Effect_Zap += Number
        }
        function Fun_Link_Effect_Inferno(Number){
            Link_Effect_Inferno += Number
        }
        function Fun_Link_Effect_Delay(Number){
            Link_Effect_Delay += Number
        }
        function Fun_Link_Effect_KnockBack(Number){
            Link_Effect_KnockBack += Number
        }
        function Fun_Link_Effect_Recovery(Number){
            Link_Effect_Recovery += Number
        }
        function Fun_Link_Effect_Bomb(Number){
            Link_Effect_Bomb += Number
        }
        function Fun_Link_Effect_Freeze(Number){
            Link_Effect_Freeze += Number
        }
        function Fun_Link_Support_Clone(Number){
            Link_Support_Clone += Number
        }
        function Fun_Link_Support_SkeletonRush(Number){
            Link_Support_SkeletonRush += Number
        }
        function Fun_Link_Support_Lava(Number){
            Link_Support_Lava += Number
        }
        function Fun_Link_Support_Balloon(Number){
            Link_Support_Balloon += Number
        }
        function Fun_Link_Support_Golem(Number){
            Link_Support_Golem += Number
        }
        function Fun_Link_Support_RoyaleGiant(Number){
            Link_Support_RoyaleGiant += Number
        }
        function Fun_Link_Death_Zap(Number){
            Link_Death_Zap += Number
        }
        function Fun_Link_Death_Wood(Number){
            Link_Death_Wood += Number
        }
        function Fun_Link_Death_Barbarian(Number){
            Link_Death_Barbarian += Number
        }
        function Fun_Link_Death_ArrowRain(Number){
            Link_Death_ArrowRain += Number
        }
        function Fun_Link_Death_Delivery(Number){
            Link_Death_Delivery += Number
        }
        function Fun_Link_Death_Tornado(Number){
            Link_Death_Tornado += Number
        }
        function Fun_Link_Death_Earthquake(Number){
            Link_Death_Earthquake += Number
        }
        function Fun_Link_Death_Fireball(Number){
            Link_Death_Fireball += Number
        }
        function Fun_Link_Death_Poison(Number){
            Link_Death_Poison += Number
        }
        function Fun_Link_Death_Lightning(Number){
            Link_Death_Lightning += Number
        }
        function Fun_Link_Death_Rocket(Number){
            Link_Death_Rocket += Number
        }
        function Fun_Link_Anti_Small(Number){
            Link_Anti_Small += Number
        }
        function Fun_Link_Anti_Big_Land(Number){
            Link_Anti_Big_Land += Number
        }
        function Fun_Link_Anti_Big_Attack(Number){
            Link_Anti_Big_Attack += Number
        }
        function Fun_Link_Anti_Clone(Number){
            Link_Anti_Clone += Number
        }
        function Fun_Link_Attack_Air_Long(Number){
            Link_Attack_Air_Long += Number
        }
        function Fun_Link_Attack_Air_Short(Number){
            Link_Attack_Air_Short += Number
        }
        function Fun_Link_Attack_Air_HighPower(Number){
            Link_Attack_Air_HighPower += Number
        }
        function Fun_Link_Attack_Air_Area(Number){
            Link_Attack_Air_Area += Number
        }
        function Fun_Link_Attack_Air_Small(Number){
            Link_Attack_Air_Small += Number
        }
        function Fun_Link_Attack_Air_Multiple(Number){
            Link_Attack_Air_Multiple += Number
        }
        function Fun_Link_Attack_Land_Long(Number){
            Link_Attack_Land_Long += Number
        }
        function Fun_Link_Attack_Land_Short(Number){
            Link_Attack_Land_Short += Number
        }
        function Fun_Link_Attack_Land_HighPower(Number){
            Link_Attack_Land_HighPower += Number
        }
        function Fun_Link_Attack_Land_Area(Number){
            Link_Attack_Land_Area += Number
        }
        function Fun_Link_Attack_Tank(Number){
            Link_Attack_Tank += Number
        }
        function Fun_Link_Attack_Big_Land(Number){
            Link_Attack_Big_Land += Number
        }
        function Fun_Link_Attack_Big_Attack(Number){
            Link_Attack_Big_Attack += Number
        }
        function Fun_Link_Attack_Big_Air(Number){
            Link_Attack_Big_Air += Number
        }
        function Fun_Link_Attack_Single(Number){
            Link_Attack_Single += Number
        }
        function Fun_Link_Attack_Area(Number){
            Link_Attack_Area += Number
        }
        function Fun_Link_Attack_Group(Number){
            Link_Attack_Group += Number
        }
        function Fun_Link_Attack_Small(Number){
            Link_Attack_Small += Number
        }
        function Fun_Link_Attack_Tower(Number){
            Link_Attack_Tower += Number
        }
        function Fun_Link_Attack_Skeleton(Number){
            Link_Attack_Skeleton += Number
        }
        function Fun_Link_Attack_Spirit(Number){
            Link_Attack_Spirit += Number
        }
        function Fun_Link_Attack_MNWIN(Number){
            Link_Attack_MNWIN += Number
        }

        function Fun_Sort_Land(Number){
            Count_Sort_Land += Number
        }
        function Fun_Sort_Air(Number){
            Count_Sort_Air += Number
        }
        function Fun_Sort_Facility_Defense(Number){
            Count_Sort_Facility_Defense += Number
        }
        function Fun_Sort_Facility_Attack(Number){
            Count_Sort_Facility_Attack += Number
        }
        function Fun_Sort_Facility_Create(Number){
            Count_Sort_Facility_Create += Number
        }
        function Fun_Sort_Facility_Unique(Number){
            Count_Sort_Facility_Unique += Number
        }
        function Fun_Sort_Spell_Small(Number){
            Count_Sort_Spell_Small += Number
        }
        function Fun_Sort_Spell_Big(Number){
            Count_Sort_Spell_Big += Number
        }
        function Fun_Sort_Spell_Create(Number){
            Count_Sort_Spell_Create += Number
        }
        function Fun_Sort_Spell_Special(Number){
            Count_Sort_Spell_Special += Number
        }
        function Fun_Target_Land(Number){
            Count_Target_Land += Number
        }
        function Fun_Target_Air(Number){
            Count_Target_Air += Number
        }
        function Fun_Target_Tower(Number){
            Count_Target_Tower += Number
        }
        function Fun_Effect_Zap(Number){
            Count_Effect_Zap += Number
        }
        function Fun_Effect_Inferno(Number){
            Count_Effect_Inferno += Number
        }
        function Fun_Effect_Delay(Number){
            Count_Effect_Delay += Number
        }
        function Fun_Effect_KnockBack(Number){
            Count_Effect_KnockBack += Number
        }
        function Fun_Effect_Recovery(Number){
            Count_Effect_Recovery += Number
        }
        function Fun_Effect_Bomb(Number){
            Count_Effect_Bomb += Number
        }
        function Fun_Effect_Freeze(Number){
            Count_Effect_Freeze += Number
        }
        function Fun_Support_Clone(Number){
            Count_Support_Clone += Number
        }
        function Fun_Support_SkeletonRush(Number){
            Count_Support_SkeletonRush += Number
        }
        function Fun_Support_Lava(Number){
            Count_Support_Lava += Number
        }
        function Fun_Support_Balloon(Number){
            Count_Support_Balloon += Number
        }
        function Fun_Support_Golem(Number){
            Count_Support_Golem += Number
        }
        function Fun_Support_RoyaleGiant(Number){
            Count_Support_RoyaleGiant += Number
        }
        function Fun_Death_Zap(Number){
            Count_Death_Zap += Number
        }
        function Fun_Death_Wood(Number){
            Count_Death_Wood += Number
        }
        function Fun_Death_Barbarian(Number){
            Count_Death_Barbarian += Number
        }
        function Fun_Death_ArrowRain(Number){
            Count_Death_ArrowRain += Number
        }
        function Fun_Death_Tornado(Number){
            Count_Death_Tornado += Number
        }
        function Fun_Death_Delivery(Number){
            Count_Death_Delivery += Number
        }
        function Fun_Death_Earthquake(Number){
            Count_Death_Earthquake += Number
        }
        function Fun_Death_Fireball(Number){
            Count_Death_Fireball += Number
        }
        function Fun_Death_Poison(Number){
            Count_Death_Poison += Number
        }
        function Fun_Death_Lightning(Number){
            Count_Death_Lightning += Number
        }
        function Fun_Death_Rocket(Number){
            Count_Death_Rocket += Number
        }
        function Fun_Anti_Small(Number){
            Count_Anti_Small += Number
        }
        function Fun_Anti_Big_Land(Number){
            Count_Anti_Big_Land += Number
        }
        function Fun_Anti_Big_Attack(Number){
            Count_Anti_Big_Attack += Number
        }
        function Fun_Anti_Clone(Number){
            Count_Anti_Clone += Number
        }
        function Fun_Attack_Air_Long(Number){
            Count_Attack_Air_Long += Number
        }
        function Fun_Attack_Air_Short(Number){
            Count_Attack_Air_Short += Number
        }
        function Fun_Attack_Air_HighPower(Number){
            Count_Attack_Air_HighPower += Number
        }
        function Fun_Attack_Air_Area(Number){
            Count_Attack_Air_Area += Number
        }
        function Fun_Attack_Air_Small(Number){
            Count_Attack_Air_Small += Number
        }
        function Fun_Attack_Air_Multiple(Number){
            Count_Attack_Air_Multiple += Number
        }
        function Fun_Attack_Land_Long(Number){
            Count_Attack_Land_Long += Number
        }
        function Fun_Attack_Land_Short(Number){
            Count_Attack_Land_Short += Number
        }
        function Fun_Attack_Land_HighPower(Number){
            Count_Attack_Land_HighPower += Number
        }
        function Fun_Attack_Land_Area(Number){
            Count_Attack_Land_Area += Number
        }
        function Fun_Attack_Tank(Number){
            Count_Attack_Tank += Number
        }
        function Fun_Attack_Big_Land(Number){
            Count_Attack_Big_Land += Number
        }
        function Fun_Attack_Big_Attack(Number){
            Count_Attack_Big_Attack += Number
        }
        function Fun_Attack_Big_Air(Number){
            Count_Attack_Big_Air += Number
        }
        function Fun_Attack_Single(Number){
            Count_Attack_Single += Number
        }
        function Fun_Attack_Area(Number){
            Count_Attack_Area += Number
        }
        function Fun_Attack_Group(Number){
            Count_Attack_Group += Number
        }
        function Fun_Attack_Small(Number){
            Count_Attack_Small += Number
        }
        function Fun_Attack_Tower(Number){
            Count_Attack_Tower += Number
        }
        function Fun_Attack_Skeleton(Number){
            Count_Attack_Skeleton += Number
        }
        function Fun_Attack_Spirit(Number){
            Count_Attack_Spirit += Number
        }
        function Fun_Attack_MNWIN(Number){
            Count_Attack_MNWIN += Number
        }
        function Fun_26000000(Number){
            Count_26000000 += Number
        }
        function Fun_26000001(Number){
            Count_26000001 += Number
        }
        function Fun_26000002(Number){
            Count_26000002 += Number
        }
        function Fun_26000003(Number){
            Count_26000003 += Number
        }
        function Fun_26000004(Number){
            Count_26000004 += Number
        }
        function Fun_26000005(Number){
            Count_26000005 += Number
        }
        function Fun_26000006(Number){
            Count_26000006 += Number
        }
        function Fun_26000007(Number){
            Count_26000007 += Number
        }
        function Fun_26000008(Number){
            Count_26000008 += Number
        }
        function Fun_26000009(Number){
            Count_26000009 += Number
        }
        function Fun_26000010(Number){
            Count_26000010 += Number
        }
        function Fun_26000011(Number){
            Count_26000011 += Number
        }
        function Fun_26000012(Number){
            Count_26000012 += Number
        }
        function Fun_26000013(Number){
            Count_26000013 += Number
        }
        function Fun_26000014(Number){
            Count_26000014 += Number
        }
        function Fun_26000015(Number){
            Count_26000015 += Number
        }
        function Fun_26000016(Number){
            Count_26000016 += Number
        }
        function Fun_26000017(Number){
            Count_26000017 += Number
        }
        function Fun_26000018(Number){
            Count_26000018 += Number
        }
        function Fun_26000019(Number){
            Count_26000019 += Number
        }
        function Fun_26000020(Number){
            Count_26000020 += Number
        }
        function Fun_26000021(Number){
            Count_26000021 += Number
        }
        function Fun_26000022(Number){
            Count_26000022 += Number
        }
        function Fun_26000023(Number){
            Count_26000023 += Number
        }
        function Fun_26000024(Number){
            Count_26000024 += Number
        }
        function Fun_26000025(Number){
            Count_26000025 += Number
        }
        function Fun_26000026(Number){
            Count_26000026 += Number
        }
        function Fun_26000027(Number){
            Count_26000027 += Number
        }
        function Fun_26000028(Number){
            Count_26000028 += Number
        }
        function Fun_26000029(Number){
            Count_26000029 += Number
        }
        function Fun_26000030(Number){
            Count_26000030 += Number
        }
        function Fun_26000031(Number){
            Count_26000031 += Number
        }
        function Fun_26000032(Number){
            Count_26000032 += Number
        }
        function Fun_26000033(Number){
            Count_26000033 += Number
        }
        function Fun_26000034(Number){
            Count_26000034 += Number
        }
        function Fun_26000035(Number){
            Count_26000035 += Number
        }
        function Fun_26000036(Number){
            Count_26000036 += Number
        }
        function Fun_26000037(Number){
            Count_26000037 += Number
        }
        function Fun_26000038(Number){
            Count_26000038 += Number
        }
        function Fun_26000039(Number){
            Count_26000039 += Number
        }
        function Fun_26000040(Number){
            Count_26000040 += Number
        }
        function Fun_26000041(Number){
            Count_26000041 += Number
        }
        function Fun_26000042(Number){
            Count_26000042 += Number
        }
        function Fun_26000043(Number){
            Count_26000043 += Number
        }
        function Fun_26000044(Number){
            Count_26000044 += Number
        }
        function Fun_26000045(Number){
            Count_26000045 += Number
        }
        function Fun_26000046(Number){
            Count_26000046 += Number
        }
        function Fun_26000047(Number){
            Count_26000047 += Number
        }
        function Fun_26000048(Number){
            Count_26000048 += Number
        }
        function Fun_26000049(Number){
            Count_26000049 += Number
        }
        function Fun_26000050(Number){
            Count_26000050 += Number
        }
        function Fun_26000051(Number){
            Count_26000051 += Number
        }
        function Fun_26000052(Number){
            Count_26000052 += Number
        }
        function Fun_26000053(Number){
            Count_26000053 += Number
        }
        function Fun_26000054(Number){
            Count_26000054 += Number
        }
        function Fun_26000055(Number){
            Count_26000055 += Number
        }
        function Fun_26000056(Number){
            Count_26000056 += Number
        }
        function Fun_26000057(Number){
            Count_26000057 += Number
        }
        function Fun_26000058(Number){
            Count_26000058 += Number
        }
        function Fun_26000059(Number){
            Count_26000059 += Number
        }
        function Fun_26000060(Number){
            Count_26000060 += Number
        }
        function Fun_26000061(Number){
            Count_26000061 += Number
        }
        function Fun_26000062(Number){
            Count_26000062 += Number
        }
        function Fun_26000063(Number){
            Count_26000063 += Number
        }
        function Fun_26000064(Number){
            Count_26000064 += Number
        }
        function Fun_26000067(Number){
            Count_26000067 += Number
        }
        function Fun_26000068(Number){
            Count_26000068 += Number
        }
        function Fun_26000080(Number){
            Count_26000080 += Number
        }
        function Fun_26000083(Number){
            Count_26000083 += Number
        }
        function Fun_26000084(Number){
            Count_26000084 += Number
        }
        function Fun_26000085(Number){
            Count_26000085 += Number
        }
        function Fun_27000000(Number){
            Count_27000000 += Number
        }
        function Fun_27000001(Number){
            Count_27000001 += Number
        }
        function Fun_27000002(Number){
            Count_27000002 += Number
        }
        function Fun_27000003(Number){
            Count_27000003 += Number
        }
        function Fun_27000004(Number){
            Count_27000004 += Number
        }
        function Fun_27000005(Number){
            Count_27000005 += Number
        }
        function Fun_27000006(Number){
            Count_27000006 += Number
        }
        function Fun_27000006(Number){
            Count_27000007 += Number
        }
        function Fun_27000008(Number){
            Count_27000008 += Number
        }
        function Fun_27000009(Number){
            Count_27000009 += Number
        }
        function Fun_27000010(Number){
            Count_27000010 += Number
        }
        function Fun_27000012(Number){
            Count_27000012 += Number
        }
        function Fun_27000013(Number){
            Count_27000013 += Number
        }
        function Fun_28000000(Number){
            Count_28000000 += Number
        }
        function Fun_28000001(Number){
            Count_28000001 += Number
        }
        function Fun_28000002(Number){
            Count_28000002 += Number
        }
        function Fun_28000003(Number){
            Count_28000003 += Number
        }
        function Fun_28000004(Number){
            Count_28000004 += Number
        }
        function Fun_28000005(Number){
            Count_28000005 += Number
        }
        function Fun_28000006(Number){
            Count_28000006 += Number
        }
        function Fun_28000007(Number){
            Count_28000007 += Number
        }
        function Fun_28000008(Number){
            Count_28000008 += Number
        }
        function Fun_28000009(Number){
            Count_28000009 += Number
        }
        function Fun_28000010(Number){
            Count_28000010 += Number
        }
        function Fun_28000011(Number){
            Count_28000011 += Number
        }
        function Fun_28000012(Number){
            Count_28000012 += Number
        }
        function Fun_28000013(Number){
            Count_28000013 += Number
        }
        function Fun_28000014(Number){
            Count_28000014 += Number
        }
        function Fun_28000015(Number){
            Count_28000015 += Number
        }
        function Fun_28000016(Number){
            Count_28000016 += Number
        }
        function Fun_28000017(Number){
            Count_28000017 += Number
        }
        function Fun_28000018(Number){
            Count_28000018 += Number
        }
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //配列にカードを追加

    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //カードごとに各変数に数値を加算
        //ナイト
        if(Link_Number.includes("26000000") == true){
            Fun_link_Sort_Land(1)
            Fun_Link_Target_Land(1)
            Fun_Link_Attack_Land_Short(1)
            Fun_Link_Attack_Tank(1)
            Fun_Attack_Air_Long(1)
            Fun_Attack_Air_HighPower(1)
            Fun_Attack_Air_Multiple(1)
            Fun_Attack_Land_HighPower(1)
            Fun_Attack_Group(1)
            
        }

        //アーチャー
        if(Link_Number.includes("26000001") == true){
            Fun_Link_Sort_Air(1)
            Fun_Link_Target_Air(1)
            Fun_Link_Death_ArrowRain
            Fun_Link_Death_Delivery(1)
            Fun_Link_Death_Fireball(1)
            Fun_Link_Death_Poison(1)
            Fun_Link_Attack_Air_Long(1)
            Fun_Link_Attack_Single(1)
            Fun_Attack_Air_Long(1)
            Fun_Attack_Tank(1)
        }

        //ゴブリン
        if(Link_Number.includes("26000002") == true){
            
        }

        //ジャイアント
        if(Link_Number.includes("26000003") == true){
            
        }

        //ペッカ
        if(Link_Number.includes("26000004") == true){
            
        }

        //ガーゴイル
        if(Link_Number.includes("26000005") == true){
            
        }

        //エアバルーン
        if(Link_Number.includes("26000006") == true){
            
        }

        //ネクロマンサー
        if(Link_Number.includes("26000007") == true){
            
        }

        //バーバリアン
        if(Link_Number.includes("26000008") == true){
            
        }

        //ゴーレム
        if(Link_Number.includes("26000009") == true){
            
        }

        //スケルトン
        if(Link_Number.includes("26000010") == true){
            
        }

        //バルキリー
        if(Link_Number.includes("26000011") == true){
            
        }

        //スケルトン部隊
        if(Link_Number.includes("26000012") == true){
            
        }

        //ボンバー
        if(Link_Number.includes("26000013") == true){
            
        }

        //マスケット銃士
        if(Link_Number.includes("26000014") == true){
            
        }

        //ベビードラゴン
        if(Link_Number.includes("26000015") == true){
            
        }

        //プリンス
        if(Link_Number.includes("26000016") == true){
            
        }

        //ウィザード
        if(Link_Number.includes("26000017") == true){
            
        }

        //ミニペ
        if(Link_Number.includes("26000018") == true){
            
        }

        //槍ゴブリン
        if(Link_Number.includes("26000019") == true){
            
        }

        //巨大スケルトン
        if(Link_Number.includes("26000020") == true){
            
        }

        //ホグライダー
        if(Link_Number.includes("26000021") == true){
            
        }

        //ガーゴイルの群れ
        if(Link_Number.includes("26000022") == true){
            
        }

        //アイスウィザード
        if(Link_Number.includes("26000023") == true){
            
        }

        //ロイヤルジャイアント
        if(Link_Number.includes("26000024") == true){
            
        }

        //盾の戦士
        if(Link_Number.includes("26000025") == true){
            
        }

        //プリンセス
        if(Link_Number.includes("26000026") == true){
            
        }

        //ダークプリンス
        if(Link_Number.includes("26000027") == true){
            
        }

        //三銃士
        if(Link_Number.includes("26000028") == true){
            
        }

        //ラヴァハウンド
        if(Link_Number.includes("26000029") == true){
            
        }

        //アイススピリット
        if(Link_Number.includes("26000030") == true){
            
        }

        //ファイアスピリット
        if(Link_Number.includes("26000031") == true){
            
        }

        //ディガー
        if(Link_Number.includes("26000032") == true){
            
        }

        //スパーキー
        if(Link_Number.includes("26000033") == true){
            
        }

        //ボウラー
        if(Link_Number.includes("26000034") == true){
            
        }

        //ランバージャック
        if(Link_Number.includes("26000035") == true){
            
        }

        //攻城バーバリアン
        if(Link_Number.includes("26000036") == true){
            
        }

        //インフェルノドラゴン
        if(Link_Number.includes("26000037") == true){
            
        }

        //アイスゴーレム
        if(Link_Number.includes("26000038") == true){
            
        }

        //メガガーゴイル
        if(Link_Number.includes("26000039") == true){
            
        }

        //吹き矢ゴブリン
        if(Link_Number.includes("26000040") == true){
            
        }

        //ゴブリンギャング
        if(Link_Number.includes("26000041") == true){
            
        }

        //エレクトロウィザード
        if(Link_Number.includes("26000042") == true){
            
        }

        //エリートバーバリアン
        if(Link_Number.includes("26000043") == true){
            
        }

        //ハンター
        if(Link_Number.includes("26000044") == true){
            
        }

        //執行人ファルチェ
        if(Link_Number.includes("26000045") == true){
            
        }

        //ユーノ
        if(Link_Number.includes("26000046") == true){
            
        }

        //見習い親衛隊
        if(Link_Number.includes("26000047") == true){
            
        }

        //ダークネクロ
        if(Link_Number.includes("26000048") == true){
            
        }

        //コウモリの群れ
        if(Link_Number.includes("26000049") == true){
            
        }

        //ロイヤルゴースト
        if(Link_Number.includes("26000050") == true){
            
        }

        //ラムライダー
        if(Link_Number.includes("26000051") == true){
            
        }

        //ザッピー
        if(Link_Number.includes("26000052") == true){
            
        }

        //アウトロー
        if(Link_Number.includes("26000053") == true){
            
        }

        //60式ムート
        if(Link_Number.includes("26000054") == true){
            
        }

        //メガナイト
        if(Link_Number.includes("26000055") == true){
            
        }

        //スケルトンバレル
        if(Link_Number.includes("26000056") == true){
            
        }

        //ホバリング砲
        if(Link_Number.includes("26000057") == true){
            
        }

        //ウォールブレイカー
        if(Link_Number.includes("26000058") == true){
            
        }

        //ロイヤルホグ
        if(Link_Number.includes("26000059") == true){
            
        }

        //ゴブジャイアント
        if(Link_Number.includes("26000060") == true){
            
        }

        //漁師トリトン
        if(Link_Number.includes("26000061") == true){
            
        }

        //マジックアーチャー
        if(Link_Number.includes("26000062") == true){
            
        }

        //ライトニングドラゴン
        if(Link_Number.includes("26000063") == true){
            
        }

        //ロケット砲士
        if(Link_Number.includes("26000064") == true){
            
        }

        //エリクサーゴーレム
        if(Link_Number.includes("26000067") == true){
            
        }

        //バトルヒーラー
        if(Link_Number.includes("26000068") == true){
            
        }

        //スケルトンドラゴン
        if(Link_Number.includes("26000080") == true){
            
        }

        //マザーネクロマンサー
        if(Link_Number.includes("26000083") == true){
            
        }

        //エレクトロスピリット
        if(Link_Number.includes("26000084") == true){
            
        }

        //エレクトロジャイアント
        if(Link_Number.includes("26000085") == true){
            
        }

        //大砲
        if(Link_Number.includes("27000000") == true){
            
        }

        //ゴブリンの小屋
        if(Link_Number.includes("27000001") == true){
            
        }

        //迫撃砲
        if(Link_Number.includes("27000002") == true){
            
        }

        //インフェルノタワー
        if(Link_Number.includes("27000003") == true){
            
        }

        //ボムタワー
        if(Link_Number.includes("27000004") == true){
            
        }

        //バーバリアンの小屋
        if(Link_Number.includes("27000005") == true){
            
        }

        //テスラ
        if(Link_Number.includes("27000006") == true){
            
        }

        //エリクサーポンプ
        if(Link_Number.includes("27000007") == true){
            
        }

        //巨大クロスボウ
        if(Link_Number.includes("27000008") == true){
            
        }

        //墓石
        if(Link_Number.includes("27000009") == true){
            
        }

        //オーブン
        if(Link_Number.includes("27000010") == true){
            
        }

        //ゴブリンの檻
        if(Link_Number.includes("27000012") == true){
            
        }

        //ゴブリンドリル
        if(Link_Number.includes("27000013") == true){
            
        }

        //ファイアボール
        if(Link_Number.includes("28000000") == true){
            
        }

        //矢の雨
        if(Link_Number.includes("28000001") == true){
            
        }

        //レイジ
        if(Link_Number.includes("28000002") == true){
            
        }

        //ロケット
        if(Link_Number.includes("28000003") == true){
            
        }

        //ゴブリンバレル
        if(Link_Number.includes("28000004") == true){
            
        }

        //フリーズ
        if(Link_Number.includes("28000005") == true){
            
        }

        //鏡
        if(Link_Number.includes("28000006") == true){
            
        }

        //ライトニング
        if(Link_Number.includes("28000007") == true){
            
        }

        //ザップ
        if(Link_Number.includes("28000008") == true){
            
        }

        //ポイズン
        if(Link_Number.includes("28000009") == true){
            
        }

        //スケルトンラッシュ
        if(Link_Number.includes("28000010") == true){
            
        }

        //ローリングウッド
        if(Link_Number.includes("28000011") == true){
            
        }

        //トルネード
        if(Link_Number.includes("28000012") == true){
            
        }

        //クローン
        if(Link_Number.includes("28000013") == true){
            
        }

        //アースクエイク
        if(Link_Number.includes("28000014") == true){
            
        }

        //ローリングバーバリアン
        if(Link_Number.includes("28000015") == true){
            
        }

        //ヒールスピリット
        if(Link_Number.includes("28000016") == true){
            
        }

        //巨大雪玉
        if(Link_Number.includes("28000017") == true){
            
        }

        //ロイヤルデリバリー
        if(Link_Number.includes("28000018") == true){
            
        }
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //メインカード選出のための変数代入
        //ペッカ
        if(Link_Attack_Big_Land == 1){
            Fun_Count_26000004(1)
        }else if(Link_Attack_Big_Land >=2){
            Fun_Count_26000004(2)
        }
        if(Link_Number.includes("26000055") == true){
            Fun_Count_26000004(1)
        }
        if(Link_Number.includes("26000085") == true){
            Fun_Count_26000004(1)
        }
        if(Link_Attack_Tank>=2){
            Fun_Count_26000004(1)
        }
        if(Link_Number.includes("26000047") == true){
            Fun_Count_26000004(-2)
        }
        if(Link_Effect_Inferno>=1){
            Fun_Count_26000004(-1)
        }
        if(Link_Attack_Group>=1){
            Fun_Count_26000004(-1)
        }

        //
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //メインカード選出
        var Main_Card_all = [Count_26000003,Count_26000004,Count_26000006,Count_26000009,Count_26000020,Count_26000021,Count_26000024,Count_26000028,Count_26000029,Count_26000036,Count_26000051,Count_26000055,Count_26000056,Count_26000058,Count_26000059,Count_26000060,Count_26000067,Count_26000085,Count_27000002,Count_27000008,Count_27000013,Count_28000004,Count_28000010]
        var Main_Card_Number = Main_Card_all.indexOf(Math.max(...Main_Card_all));

        Result = []

        if(Main_Card_Number == 0  ){Result[0] =26000003} if(Main_Card_Number == 1  ){Result[0] =26000004} if(Main_Card_Number == 2  ){Result[0] =26000006} if(Main_Card_Number == 3  ){Result[0] =26000009} if(Main_Card_Number == 4  ){Result[0] =26000020} if(Main_Card_Number == 5  ){Result[0] =26000021} if(Main_Card_Number == 6  ){Result[0] =26000024} if(Main_Card_Number == 7  ){Result[0] =26000028} if(Main_Card_Number == 8  ){Result[0] =26000029} if(Main_Card_Number == 9  ){Result[0] =26000036} if(Main_Card_Number == 10 ){Result[0] =26000051} if(Main_Card_Number == 11 ){Result[0] =26000055} if(Main_Card_Number == 12 ){Result[0] =26000056} if(Main_Card_Number == 13 ){Result[0] =26000058} if(Main_Card_Number == 14 ){Result[0] =26000059} if(Main_Card_Number == 15 ){Result[0] =26000060} if(Main_Card_Number == 16 ){Result[0] =26000067} if(Main_Card_Number == 17 ){Result[0] =26000085} if(Main_Card_Number == 18 ){Result[0] =27000002} if(Main_Card_Number == 19 ){Result[0] =27000008} if(Main_Card_Number == 20 ){Result[0] =27000013} if(Main_Card_Number == 21 ){Result[0] =28000004} if(Main_Card_Number == 22 ){Result[0] =28000010 }
        
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
        //リンクデッキ画像表示
        var img_1 = Link_Number[0]+".png"
        var img_2 = Link_Number[1]+".png"
        var img_3 = Link_Number[2]+".png"
        var img_4 = Link_Number[3]+".png"
        var img_5 = Link_Number[4]+".png"
        var img_6 = Link_Number[5]+".png"
        var img_7 = Link_Number[6]+".png"
        var img_8 = Link_Number[7]+".png"
        let img_001 = document.getElementById("image_place1");
        img_001.src = img_1;
        let img_002 = document.getElementById("image_place2");
        img_002.src = img_2;
        let img_003 = document.getElementById("image_place3");
        img_003.src = img_3;
        let img_004 = document.getElementById("image_place4");
        img_004.src = img_4;
        let img_005 = document.getElementById("image_place5");
        img_005.src = img_5;
        let img_006 = document.getElementById("image_place6");
        img_006.src = img_6;
        let img_007 = document.getElementById("image_place7");
        img_007.src = img_7;
        let img_008 = document.getElementById("image_place8");
        img_008.src = img_8;
        //メタデッキ画像表示
        var img_11 = Result[0]+".png"
        var img_12 = Result[1]+".png"
        var img_13 = Result[2]+".png"
        var img_14 = Result[3]+".png"
        var img_15 = Result[4]+".png"
        var img_16 = Result[5]+".png"
        var img_17 = Result[6]+".png"
        var img_18 = Result[7]+".png"
        let img_011 = document.getElementById("image_place11");
        img_011.src = img_11;
        let img_012 = document.getElementById("image_place12");
        img_012.src = img_12;
        let img_013 = document.getElementById("image_place13");
        img_013.src = img_13;
        let img_014 = document.getElementById("image_place14");
        img_014.src = img_14;
        let img_015 = document.getElementById("image_place15");
        img_015.src = img_15;
        let img_016 = document.getElementById("image_place16");
        img_016.src = img_16;
        let img_017 = document.getElementById("image_place17");
        img_017.src = img_17;
        let img_018 = document.getElementById("image_place18");
        img_018.src = img_18;
    }else{
        alert("入力したリンクが間違っています")
        location.reload();
    }
    
}, false);

