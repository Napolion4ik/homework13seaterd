
$(function(){
    bg_from = 1;
    bg_to = 3;
    bg_now = 1;
    bg_interval = 5 ;
    setInterval(function(){
        $('.header').removeClass('bg' + bg_now);
        if (bg_now == bg_to) bg_now = 1;
        else bg_now++;
        $('header').addClass('bg' + bg_now);
    }, bg_interval * 1000);
})

const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
button.addEventListener('click', function(){
    menu.classList.toggle('active')
})