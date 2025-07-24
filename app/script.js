var targetDate = new Date("July 27, 2025 08:00:00").getTime();

window.addEventListener("DOMContentLoaded", function () {

    const loadStartTime = new Date().getTime();

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
        timerElementHours.innerHTML = hours;
        timerElementMinutes.innerHTML = minutes;
        timerElementSeconds.innerHTML = seconds;

    }, 1000);




    window.addEventListener("load", function () {

        const loadEndTime = new Date().getTime();
        const loadTime = loadEndTime - loadStartTime;

        // Проверяем, было ли это первое посещение
        const isFirstVisit = !sessionStorage.getItem('visited');

        // Если это первое посещение, добавляем запись в sessionStorage
        if (isFirstVisit) {
            sessionStorage.setItem('visited', 'true');
        }

        // Устанавливаем задержку только если это первое посещение и время загрузки меньше 3 секунд
        const delay = (isFirstVisit && loadTime < 3000) ? 1500 : 0;

        console.log("Загрузка страницы заняла: " + loadTime + " мс");
        console.log(delay);

        setTimeout(function () {

            // Добавляем класс для скрытия загрузочного экрана
            document.getElementById('loader').classList.add('hidden');

            // Делаем паузу, чтобы переход завершился, и затем скрываем элемент из DOM
            setTimeout(function () {
                // Скрываем загрузочный экран из DOM
                document.getElementById('loader').style.display = 'none';
                // Показываем основной контент
                document.getElementById('home-container').style.display = 'flex';


                const blocks = document.querySelectorAll('.fade-in');

                function fadeInBlocks(index) {
                    if (index < blocks.length) {
                        setTimeout(function () {
                            blocks[index].classList.add('active');
                            fadeInBlocks(index + 1);
                        }, 500);
                    }
                }

                fadeInBlocks(0);
                console.log('fadeInBlocks');



                let currentIndex = 0;
                const slides = document.querySelectorAll('.carousel img');
                const totalSlides = slides.length;
                const wrapper = document.querySelector('.carousel-wrapper');

                function showSlide(index) {
                    wrapper.style.transform = `translateX(-${index * 100}%)`;
                }

                function nextSlide() {
                    currentIndex = (currentIndex + 1) % totalSlides;
                    showSlide(currentIndex);
                }

                setInterval(nextSlide, 3000); // Change image every 3 seconds

            }, 0); // Время задержки должно совпадать с временем transition
        }, delay);
    });
});



//TODO add a loading page when loading a page with slow 3g network
