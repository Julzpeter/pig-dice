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

function roll() {
    var rol = Math.ceil((Math.random() * 6));
    $("#score").html(rol);
}

$("#roll").click(function () {
    roll();
});









