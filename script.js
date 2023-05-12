const swiper = new Swiper('.header-swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 800,
    effect: 'coverflow',
})

const feedbackSwiper = new Swiper('.feedback-swiper', {
    loop: true,
    effect: 'flip',
    speed: 600,
    keyboard: {
        enabled: true
    },
    navigation: {
        nextEl: '.right-button',
        prevEl: '.left-button',
    },
})

const burgerMenuIcon = document.querySelector('.burger-menu')
const burgerMenu = document.querySelector('.fullscreen-menu')

burgerMenuIcon.addEventListener('click', function () {
    burgerMenu.classList.toggle('active-menu')
})



AOS.init({
    once: true
})



let runningText = document.querySelectorAll('.heading-move')
let position = 0

function animate() {
    position += 1

    runningText.forEach((text, index) => {
        if (index === 1) {
            text.style.transform = `translateX(-${position}px)`
        } else {
            text.style.transform = `translateX(${position}px)`
        }

        if (position > text.offsetWidth) {
            position = 0
        }
    })

    requestAnimationFrame(animate)
}

animate()






