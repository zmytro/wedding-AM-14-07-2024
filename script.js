// Задайте дату, до которой нужно отсчитывать время
var targetDate = new Date("July 14, 2024 20:00:00").getTime();

// Обновляйте таймер каждую секунду
var timer = setInterval(function () {

    // Получите текущую дату и время
    var currentDate = new Date().getTime();

    // Рассчитайте оставшееся время в миллисекундах
    var remainingTime = targetDate - currentDate;

    // Переведите миллисекунды в дни, часы, минуты и секунды
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Выведите результат
    //console.log(days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds ");


    // Если время истекло, очистите интервал таймера
    if (remainingTime < 0) {
        clearInterval(timer);
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        console.log("Время истекло!");
    }

    var timerElementDays = document.getElementById("timerDays");
    var timerElementHours = document.getElementById("timerHours");
    var timerElementMinutes = document.getElementById("timerMinutes");
    var timerElementSeconds = document.getElementById("timerSeconds");

    // Выводим результат
    /*       if(days < 2.0){
            timerElementDays.innerHTML = days + " day";
        }else timerElementDays.innerHTML = days + " days";

        if(hours < 2.0){
            timerElementHours.innerHTML = hours + " hour";
        }else timerElementHours.innerHTML = hours + " hours";

        if(minutes < 2.0){
            timerElementMinutes.innerHTML = minutes + " minute";
        }else timerElementMinutes.innerHTML = minutes + " minutes";
        
        if(seconds < 2.0){
            timerElementSeconds.innerHTML = seconds + " second";
        }else timerElementSeconds.innerHTML = seconds + " seconds";
*/
    timerElementDays.innerHTML = days + "d ";
    timerElementHours.innerHTML = hours + "h ";
    timerElementMinutes.innerHTML = minutes + "m ";
    timerElementSeconds.innerHTML = seconds + "s ";

}, 1000); // обновление каждую секунду