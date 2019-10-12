console.log("javascript loaded")

var wins = 0;
var losses = 0;
var crystals = [];
var total = 0
var randomNumber = 0


function setRandomNumber() {
    randomNumber = Math.floor(Math.random * 120) + 19;

}


// computer number
// 4 randon number associated to the buttons

// crystals = [4,7,9,5]  // for loop 4 times 
// crystals[0]
// asign to every button a value = to the index in the array
// show the info in the DOM (conputer number)


//

function reset() {

    // computer number
    randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log("randomNumber: ", randomNumber)
    $("#random-number").text(randomNumber);


    crystals = []
    while (crystals.length < 4) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log("random: ", random)
        if (crystals.indexOf(random) === -1) {
            crystals.push(random)

        }
        console.log(crystals, "len: ", crystals.length)
    }

    total = 0;
    $("#user-score").text(total);
    //console.log(crystals);
    // clean the yourtotal
    // update the total in the DOM

}

// onclick 
reset();

$(".crystals").on("click", function () {
    // read the value of the index then add the array[index] to the number
    // verifications (wins or losses or keep going )
    console.log(this);
    var index = $(this).attr("index")
    console.log(index, crystals[index]);

    total = total + crystals[index];
    $("#user-score").text(total);

    if (total === randomNumber) {
        wins++;
        $("#win-counter").text(wins);
        reset();
    }
    else if (total > randomNumber) {
        losses++;
        $("#loss-counter").text(losses);
        reset();
    }
})



