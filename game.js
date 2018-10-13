$(document).ready(function(){
    var targetNumber = Math.floor(Math.random()*60+40)
    $('#targetdisplay').text("Target Number: " + targetNumber);

    var score = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    $('#scorecounter').text("Score: " + score);


    var bur1 = Math.floor(Math.random()*15)
    var bur2 = Math.floor(Math.random()*15)
    var bur3 = Math.floor(Math.random()*15)
    var bur4 = Math.floor(Math.random()*15)

    function winning(){
        wins++;
        alert("You Win!");
        $('#wins').text("Wins: " + wins);
        reset();
    }

    function losing(){
        losses++;
        alert("You lose");
        $('#losses').text("Losses: " + losses);
        reset();
    }
function reset(){
     bur1 = Math.floor(Math.random()*15);
     bur2 = Math.floor(Math.random()*15);
     bur3 = Math.floor(Math.random()*15);
     bur4 = Math.floor(Math.random()*15);
    targetNumber = Math.floor(Math.random()*60+40);
    $('#targetdisplay').text("Target Number: " + targetNumber);
    score = 0;
    $('#scorecounter').text("Score: " + score)
}

$('#burger1').on ('click', function() {
    score = score + bur1;
    $('#scorecounter').text("Score: " + score);
    if (score === targetNumber) {
        winning();
    }
    else if (score > targetNumber) {
        losing();
    }
})

$('#burger2').on ('click', function() {
    score = score + bur2;
    $('#scorecounter').text("Score: " + score);
    if (score === targetNumber) {
        winning();
    }
    else if (score > targetNumber) {
        losing();
    }
})

$('#burger3').on ('click', function() {
    score = score + bur3;
    $('#scorecounter').text("Score: " + score);
    if (score === targetNumber) {
        winning();
    }
    else if (score > targetNumber) {
        losing();
    }
})

$('#burger4').on ('click', function() {
    score = score + bur4;
    $('#scorecounter').text("Score: " + score);
    if (score === targetNumber) {
        winning();
    }
    else if (score > targetNumber) {
        losing();
    }
});

});






































// window.onload = function () {
// var wins = 0;
// var losses = 0;
// var score = 0;


// var targetNumber = Math.floor(Math.random() * 120) + 40
// $("#scorecounter").text(targetNumber);


// if (score === targetNumber) {
//     alert("You Win!");
//     wins++;
//     score = 0;
// }
// else if (score > targetNumber) {
//     alert ("You Lose")
//     losses++;
//     score = 0;
// }

// $("#burger1").on("click", function() {
//     var clicktNumber1 = Math.floor(Math.random() * 20) + 1
//     clicktNumber1 + score === score
//     console.log(score)
//     console.log(clicktNumber1)
// })


// }