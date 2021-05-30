// counter 
var counter = 10;
var countdown = function() {
    // console.log(counter);
    document.getElementById("counter").innerHTML = counter;
    counter--;
    if (counter === 0) {
        // console.log("Blast off");
        document.getElementById("counter").innerHTML = "EXPIRED";

        // this goes on without stopping
        // till you use clear interval
        clearInterval(startCountdown)

    }
}

var startCountdown = setInterval(countdown, 1000)
    // end counter