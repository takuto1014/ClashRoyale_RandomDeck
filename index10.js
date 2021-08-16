document.getElementById("link").addEventListener("click", function(){
    //time 絞り込み期間
    var elements = document.getElementsByName( "time" ) ;
    // 選択状態の値を取得
    for ( var a="", i=elements.length; i--; ) {
        if ( elements[i].checked ) {
            var a = elements[i].value ;
            break ;
        }
    }
    if ( a === "" ) {
    	term = "3d"    // 未選択状態
    } else {
	
        term = a    // aには選択状態の値が代入されている
    }
    //-----------------------------------------------------------------------
    //sort 表示順
    var elements = document.getElementsByName( "sort" ) ;
    // 選択状態の値を取得
    for ( var b="", i=elements.length; i--; ) {
        if ( elements[i].checked ) {
            var b = elements[i].value ;
            break ;
        }
    }
    if ( b === "" ) {
    	sort = "rating"    // 未選択状態
    } else {
	
        sort = b    // aには選択状態の値が代入されている
    }
    //-----------------------------------------------------------------------
    //size 検索結果数
    var elements = document.getElementsByName( "size" ) ;
    // 選択状態の値を取得
    for ( var c="", i=elements.length; i--; ) {
        if ( elements[i].checked ) {
            var c = elements[i].value ;
            break ;
        }
    }
    if ( c === "" ) {
    	size = "10"    // 未選択状態
    } else {
	
        size = c    // aには選択状態の値が代入されている
    }
    //-----------------------------------------------------------------------
    //players プレイヤー
    var elements = document.getElementsByName( "players" ) ;
    // 選択状態の値を取得
    for ( var d="", i=elements.length; i--; ) {
        if ( elements[i].checked ) {
            var d = elements[i].value ;
            break ;
        }
    }
    if ( d === "" ) {
    	players = "PvP"    // 未選択状態
    } else {
	
        players = d    // aには選択状態の値が代入されている
    }
    //-----------------------------------------------------------------------
    //type バトルタイプ
    var elements = document.getElementsByName( "type" ) ;
    // 選択状態の値を取得
    for ( var e="", i=elements.length; i--; ) {
        if ( elements[i].checked ) {
            var e = elements[i].value ;
            break ;
        }
    }
    if ( e === "" ) {
    	type = "All"    // 未選択状態
    } else {
	
        type = e    // aには選択状態の値が代入されている
    }
    //-----------------------------------------------------------------------
    //min_elixir= max_elixir 平均エリクサー
    let elixir_range = document.getElementById('elixir_range');
    elixir_1 = elixir_range.value
    let elixir_range2 = document.getElementById('elixir_range2');
    elixir_2 = elixir_range2.value

    //-----------------------------------------------------------------------
    //min_cycle_elixir= max_cycle_elixir 4枚サイクル
    elixir1 = document.getElementById("elixir_cycle")
    elixir_3 = elixir1.value
    elixir2 = document.getElementById("elixir_cycle2")
    elixir_4 = elixir2.value

    //-----------------------------------------------------------------------
    //エラーの設定
    if(elixir_1>elixir_2){
        alert("入力した値が間違っています")
    }else{
    location.reload();
    location.href="https://royaleapi.com/decks/popular?time="+term+"&sort="+sort+"&size="+size+"&players="+players+"&min_trophies=0&max_trophies=10000&min_elixir="+elixir_1+"&max_elixir="+elixir_2+"&min_cycle_elixir="+elixir_3+"&max_cycle_elixir="+elixir_4+"&mode=digest&type="+type+"&global_exclude=false"
    }
}, false);