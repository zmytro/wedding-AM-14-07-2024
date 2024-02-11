// Задайте дату, до которой нужно отсчитывать время
var targetDate = new Date("July 14, 2024 12:00:00").getTime();

// Обновляйте таймер каждую секунду
var timer = setInterval(function() {

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
    console.log(days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds ");
    

    // Если время истекло, очистите интервал таймера
    if (remainingTime < 0) {
        clearInterval(timer);
        console.log("Время истекло!");
    }

    var timerElementDays = document.getElementById("timerDays");
    var timerElementHours = document.getElementById("timerHours");
    var timerElementMinutes = document.getElementById("timerMinutes");
    var timerElementSeconds = document.getElementById("timerSeconds");
        
        // Выводим результат
        timerElementDays.innerHTML = days;
        timerElementHours.innerHTML = hours;
        timerElementMinutes.innerHTML = minutes;
        timerElementSeconds.innerHTML = seconds;

}, 1000); // обновление каждую секунду
