let sliderIndex = 0;
let sliders = document.querySelectorAll('.banner .slider li')
let controls = document.querySelectorAll('.control a')
controls.forEach((item, index) => {
    item.addEventListener('click', () => {
        sliderIndex = index
        play(sliderIndex)
    })
})
setInterval(() => {
    sliderIndex++
    if (sliderIndex == sliders.length) sliderIndex = 0
    play(sliderIndex)
}, 2000)
function play(index) {
    sliders.forEach((item, index) => {
        item.classList.remove('active')
        controls[index].classList.remove('active')
    })
    sliders[sliderIndex].classList.add('active')
    controls[sliderIndex].classList.add('active')
}


let campusContetItem = document.querySelectorAll('.campusContetItem')
let campusItem = document.querySelectorAll('.campusTitle a')
campusItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        campusContetItem.forEach(subItem => {
            subItem.classList.remove('active')
        })
        campusContetItem[index].classList.add('active')
    })
})

document.querySelector('.prev').addEventListener('click', () => {
    sliderIndex--
    if (sliderIndex == -1) {
        sliderIndex = sliders.length -1
    }
    play(sliderIndex)
})
document.querySelector('.next').addEventListener('click', () => {
    sliderIndex++
    if (sliderIndex == sliders.length) sliderIndex = 0
    play(sliderIndex)
})