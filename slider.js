const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')

let slideNumber = 1; 

for (let i = 0; i < images.length; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = '#fff'

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
    })
}

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBg()
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1
        button.style.backgroundColor = '#fff'
    })
})

const nextSlide = () => {
    slider.style.transform = `translate(-${slideNumber * 800}px)`
    slideNumber++
}

const prevSlide = () => {
    slider.style.transform = `translate(-${(slideNumber - 2) * 800}px)`
    slideNumber--
}

const getFirstSlide = () => {
    slider.style.transform = `translate(0px)`
    slideNumber = 1
}

const getLastSlide = () => {
    slider.style.transform = `translate(-${(images.length - 1) * 800}px)`
    slideNumber = images.length
}

right.addEventListener('click', () => {
    (slideNumber < images.length) ? nextSlide() : getFirstSlide()
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = '#fff'
})

left.addEventListener('click', () => {
    (slideNumber > 1) ? prevSlide() : getLastSlide()
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = '#fff'
})

