
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 800,
    effect: 'coverflow',
    // easing: 'linear',
})



const burgerMenuIcon = document.querySelector('.burger-menu')
const burgerMenu = document.querySelector('.fullscreen-menu')

burgerMenuIcon.addEventListener('click', function(){
    burgerMenu.classList.toggle('active-menu')
})



AOS.init()