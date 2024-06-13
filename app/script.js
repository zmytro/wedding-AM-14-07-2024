var targetDate = new Date("July 14, 2024 20:00:00").getTime();


var timer = setInterval(function () {

    var currentDate = new Date().getTime();

    var remainingTime = targetDate - currentDate;

    // Переведите миллисекунды в дни, часы, минуты и секунды
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    //console.log(days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds ");

    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // Если время истекло
    if (remainingTime < 0) {
        clearInterval(timer);
        var days = '00';
        var hours = '00';
        var minutes = '00';
        var seconds = '00';
        console.log("Время истекло!");
    }

    var timerElementDays = document.getElementById("timerDays-p");
    var timerElementHours = document.getElementById("timerHours-p");
    var timerElementMinutes = document.getElementById("timerMinutes-p");
    var timerElementSeconds = document.getElementById("timerSeconds-p");

    timerElementDays.innerHTML = days;
    timerElementHours.innerHTML = hours ;
    timerElementMinutes.innerHTML = minutes ;
    timerElementSeconds.innerHTML = seconds;

}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.fade-in');

    function fadeInBlocks(index) {
        if (index < blocks.length) {
            setTimeout(function() {
                blocks[index].classList.add('active');
                fadeInBlocks(index + 1);
            }, 500); 
        }
    }

    fadeInBlocks(0);
    console.log('fadeInBlocks');
});
