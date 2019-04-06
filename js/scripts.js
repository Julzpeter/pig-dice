//User interface

function Player() {
    this.name="";
    this.totalScore = 0;
    this.cummulativeScore = 0;
}

//roll method
Player.prototype.roll = function () {
    var rolledDice = Math.floor((Math.random() * 6) + 1);
    if (rolledDice > 1) {
        this.cummulativeScore+=rolledDice;
    }
    else {
        this.cummulativeScore = 0;
    }
    return rolledDice;
}
//hold method
Player.prototype.hold = function () {
    this.totalScore += this.cummulativeScore;
    this.cummulativeScore = 0;
    return this.totalScore;
}
var playerOne = new Player();
var playerTwo = new Player();
var winscore = 0;


var startGame = function (playerOneName, playerTwoName) {
    playerOne.name = playerOneName;
    playerTwo.name = playerTwoName;
    return 0;
}



$("#p1-roll-button").click(
    function (event) {
        var rolledDice = playerOne.roll();
        $("rolled").text("You rolled:" + rolledDice);
        $("cummulative-score").text("Your total score:" + playerOne.cummulativeScore);
        if (rolledDice == 1) {
            return $("hold-button").trigger("click");
        }
        if ((playerOne.cummulativeScore + playerOne.totalScore) >= winscore) {
            playerOne.totalScore = playerOne.cummulativeScore + playerOne.totalScore;
            return winGame(playerOne);
        }
        return 0;
    }
)









