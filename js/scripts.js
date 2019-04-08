//front End logic
$(document).ready(function () {
    //Hides Game rules
    $("#rules").hide();
    $("gamingArea").hide();

    $("gamingArea").show();
    //Show the rules onclick
    $(".well h3").click(function () {
        $("#rules").fadeToggle(100);
    });

    //hides game section
    $("#jump").hide();

    //show game section onclick
    $("#game").click(function () {
        $("#jump").fadeToggle(100);
        $("#tron").hide();
    });
});


//business logic
var rollDice = function () {
    return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
    this.roll = 0;
    this.temporaryScore = 0;
    this.cumulativeScore = 0;
    this.turn = turn;
    this.playerName;
}

Player.prototype.rollOne = function () {
    if (this.roll === 1) {
        this.temporaryScore = 0;
        alert(" Your turn is over!")
        // this.changeturn();
    } else {
        this.temporaryScore += this.roll;
    }
}

Player.prototype.hold = function () {
    this.cumulativeScore += this.temporaryScore;
    this.temporaryScore = 0;
    // this.changeturn();
    alert("Cool!");
}

Player.prototype.changeturn = function () {
    if (this.roll === 1) {
        this.turn = false;
    } else {
        this.turn = true;
    }
}

Player.prototype.winnerCheck = function () {
    if (this.cumulativeScore >= 100) {
        alert("Youve Won!!!");
    }
}

// User Interface
$(document).ready(function () {
    player1 = new Player(true);
    player2 = new Player(false);
    $("button#player1").click(function (event) {
        player1.roll = rollDice();
        $("#diceRoll").text(player1.roll);
        player1.rollOne();
        $("#turnScore1").text(player1.temporaryScore);
    });

    $("button#player2").click(function (event) {
        player2.roll = rollDice();
        $("#diceRoll2").text(player2.roll);
        player2.rollOne();
        $("#turnScore2").text(player2.temporaryScore);
    });

    $("button#hold").click(function (event) {
        player1.hold();
        $("#overallScore1").text(player1.cumulativeScore);
        $("#turnScore1").empty();
        $("#diceRoll").empty();
        player1.winnerCheck();
    });

    $("button#hold2").click(function (event) {
        player2.hold();
        $("#overallScore2").text(player2.cumulativeScore);
        $("#turnScore2").empty();
        $("#diceRoll2").empty();
        player2.winnerCheck();
    });

});
