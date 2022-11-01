alert(88888888);

alert("美味しいどんぶり決定戦開催します！！！");

/*
 * 美味しいどんぶり決定戦2022のキャラクター
 * 0: てんどんまん（グー）
 * 1: かつどんまん（チョキ）
 * 2: かまめしどん（パー）
 * として処理する
 */
function rsp(playerSelect) {
    let result;
    let playerSelectHand;
    let comSelectHand;
    let resultString;
    let random = Math.random();
    let comSelect = Math.floor(random * 3);
    console.log(comSelect);
    console.log(playerSelect);

    /*
     * 勝負は（プレイヤーが）
     * 0: きみにはまけたよ
     * 1: ぼくのかちだね
     * 2: どっちもおいしいね～
     */

    if (playerSelect == comSelect) {
        // 一緒だったらおあいこ
        result = 2;
    } else {
        // 違うので条件によって勝敗を振り分ける
        if (playerSelect == 0) {
            // プレイヤーはてんどんまん
            if (comSelect == 1) {
                // コンピューターはかまめしどん
                result = 1;
            } else {
                // コンピューターはかつどんまん
                result = 0;
            }
        } else if (playerSelect == 1) {
            // プレイヤーはかつどんまん
            if (comSelect == 0) {
                // コンピューターはてんどんまん
                result = 0;
            } else {
                // コンピューターはかまめしどん
                result = 1;
            }
        } else {
            // プレイヤーはかまめしどん
            if (comSelect == 0) {
                // コンピューターはてんどんまん
                result = 1;
            } else {
                // コンピューターはかつどんまん
                result = 0;
            }
        }
    }
    console.log(result);

    if (playerSelect == 0) {
        playerSelectHand = "てんどんまん";
    } else if (playerSelect == 1) {
        playerSelectHand = "かつどんまん";
    } else {
        playerSelectHand = "かまめしどん";
    }

    if (comSelect == 0) {
        comSelectHand = "てんどんまん";
    } else if (comSelect == 1) {
        comSelectHand = "かつどんまん";
    } else {
        comSelectHand = "かまめしどん";
    }

    if (result == 0) {
        resultString = "バイキンマンにたべられちゃった（負け）";
    } else if (result == 1) {
        resultString = "やった～！ありがとう！おいしいよ～！（勝ち）";
    } else {
        resultString = "ふたりではんぶんこだね！（あいこ）";
    }

    document.getElementById("player").innerHTML = "カバオくん（あなた）は "+ playerSelectHand;
    document.getElementById("computer").innerHTML =
        "バイキンマン（じゃんけんマスター）は " + comSelectHand;
    document.getElementById("resultMsg").innerHTML = "ぐるっと回ってどーん！ " + resultString;
}
$(".b").on("click", function () {

    alert("どんぶりルーレットスタート！");
          // 追加したもの↓
          $(".c").css("color", "red");
      
      var random = Math.floor(Math.random() * 5);
        console.log(random, "ランダムな数字");
      
        if (random === 0) {            
          console.log("大吉");
          $(".c").text("大吉");
          $(".c").css("color","orange");

        } else if (random === 1) {
          console.log("大大吉");
          $(".c").text("大大吉");
          $(".c").css("color","green");

        } else if (random === 2) {
          console.log("大吉of大吉");
          $(".c").text("大吉of大吉");
          $(".c").css("color","blue");

        } else if (random === 3) {
          console.log("大＆吉");
          $(".c").text("大＆吉");
          $(".c").css("color","yellow");

        } else if (random === 4) {
          console.log("THE 大吉");
          $(".c").text("THE 大吉");
          $(".c").css("color","purple");

        }
    
    //$(".c").fadeOut(1000);
    //$(".c").fadeIn(1000);
    


      });