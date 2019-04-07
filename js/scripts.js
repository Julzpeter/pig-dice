$(document).ready(function () {


    //Hides Game rules
    $("#rules").hide();

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

//Global Variables
var player1, player2;
//BackEnd Logic
function Player(name, turnTotal, diceRoll, totalScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.overallScore = 0;
    this.active = active;
}
//Disable and enable the game area
function activeUser() {
    if (player1.active === true && player2.active === false) {
        $('.player1Area').children().prop('disabled', false);
        $('.player1Area').removeClass('disableGamingArea');
        $('.player2Area').children().prop('disabled', true);
        $('.player2Area').addClass('disableGamingArea');
    } else {
        $('.player2Area').children().prop('disabled', true);
        $('.player2Area').addClass('disableGamingArea');
        $('.player1Area').children().prop('disabled', false);
        $('.player1Area').removeClass('disableGamingArea');
    }
};

//roll dice
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1);
    this.diceRoll = randomNo;
    activeUser();
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        if (this.active === player1.active) { //disable and enable gaming areas when dice is a 1 according to which player is active.
            player1.active = false;
            player2.active = true;
            $('.player1Area').children().prop('disabled', true);
            $('.player1Area').addClass('disableGamingArea');
            $('.player2Area').children().prop('disabled', false);
            $('.player2Area').removeClass('disableGamingArea');
        } else if (this.active === player2.active) {
            player2.active = false;
            player1.active = true;
            $('.player2Area').children().prop('disabled', true);
            $('.player2Area').addClass('disableGamingArea');
            $('.player1Area').children().prop('disabled', false);
            $('.player1Area').removeClass('disableGamingArea');
        } else {
            console.log("not working");
        }
        return alert("Oops you got a 1. Your turn is over!");
    } else {
        this.turnTotal += randomNo;
    };
    return this.diceRoll;
};

//hold dice
Player.prototype.hold = function () {
    activeUser();
    this.overallScore += this.turnTotal;
    if (this.overallScore >= 100) {
        alert("Game Over. You win!!!!");

    } else {
        return false;
    }
    console.log('the turn total is: ' + this.turnTotal);
    return this.overallScore;
};
var thePlayers = [player1, player2];
thePlayers.forEach(function (player) {
    player.diceRoll = 0;
    player.turnTotal = 0;
    player.overallScore = 0;
})
var outputs = [$(".diceRoll1"), $(".turnScore1"), $(".overallScore1"), $(".diceRoll2"), $(".turnScore2"), $(".overallScore2")];
outputs.forEach(function (ouput) {
    outputs.text(0);
})


//roll number and turn total when the roll button is clicked
$('.roll1').click(function (event) { //roll button for player1
    event.preventDefault();
    //Activate Gaming Area
    player1.active = true;
    player2.active = false;
    player1.roll(); //call the function to generate random numbers
    $('.diceRoll1').text(player1.diceRoll); //display the rolled dice number
    $('.turnScore1').text(player1.turnTotal); //display the turn score (temporary score)
});
$('.roll2').click(function (event) { //roll button for player2
    event.preventDefault();
    //Activate Gaming Area
    player2.active = true;
    player1.active = false;
    player2.roll(); //call the function to generate random numbers
    $('.diceRoll2').text(player2.diceRoll); //display the rolled dice number
    $('.turnScore2').text(player2.turnTotal); //display the turn score (temporary score)
});
//Display overall score when the hold button is clicked
$('.hold1').click(function (event) { //hold button for player1
    event.preventDefault();
    //Deactivate Gaming Area
    player1.active = false;
    player2.active = true;
    player1.hold(); //call the function to add the turn score to the overall score
    $('.overallScore1').text(player1.overallScore); //display the overall score
    //Clear dice roll and turn score
    player1.diceRoll = 0;
    player1.turnTotal = 0;
    $('.diceRoll1').text(player1.diceRoll);
    $('.turnScore1').text(player1.turnTotal);
});
$('.hold2').click(function (event) { //hold button for player2
    event.preventDefault();
    //Deactivate Gaming Area
    player2.active = false;
    player1.active = true;
    player2.hold(); //call the function to add the turn score to the overall score
    $('.overallScore2').text(player2.overallScore); //display the overall score
    //Clear turn score and total score
    player2.diceRoll = 0;
    player2.turnTotal = 0;
    $('.diceRoll2').text(player2.diceRoll);
    $('.turnScore2').text(player2.turnTotal);
});










