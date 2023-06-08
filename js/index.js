let element = document.querySelector('.box')

let speedX = 0 // X 轴的最终偏移
let speedY = 0 // Y 轴的最终偏移
let x0 = 0 // X 轴的中心点
let y0 = 0 // Y 轴的中心点
let clientX = 0 // 鼠标 在屏幕X轴的位置
let clientY = 0 // 鼠标 在屏幕Y轴的位置
let distance = 130  // 移动的速度（越大越慢）
let stopSize = 200  // 停止移动的中心大小
 let timer = setInterval(() => {
     move()
 }, 50)

 window.addEventListener('mousemove', function (event) {
     x0 = window.innerWidth / 2
     y0 = window.innerHeight / 2
     clientX = event.clientX
     clientY = event.clientY
     if (((clientX < x0 + stopSize) && (clientX > x0 - stopSize)) && ((clientY < y0 + stopSize) && (clientY > y0 - stopSize))) {
         this.clearInterval(timer)
         timer = null
     } else {
         if (!timer) {
             timer = setInterval(() => {
                 move()
             }, 50)
         }
     }
 })
function move() {
    if (clientX > x0) {
        speedX -= (clientX - x0) / distance
    }
    if (clientY > y0) {
        speedY -= (clientY - y0) / distance
    }
    if (clientX < x0) {
        speedX += (x0 - clientX) / distance
    }
    if (clientY < y0) {
        speedY += (y0 - clientY) / distance
    }
    element.style.left = speedX + 'px'
    element.style.top = speedY + 'px'
}


let btns = document.querySelectorAll('.btn')
let imgs = document.querySelectorAll('img')
let prev = null

let arr = [
    [1,2,4,5,6,7,8,9,10,12],    // 第一个按钮要透明的图片
    [2,4,5,6,7,8,9,10,11,12],   // 第二个按钮要透明的图片
    [1,2,3,4,5,9,10,12],          // 第三个按钮要透明的图片
    [1,3,6,7,8,11,12]             // 第四个按钮要透明的图片
]
let mySwitch = [true, true, true, true]

btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (prev !== index) mySwitch = [true, true, true, true]
        btns.forEach(subItem => {
            subItem.classList.remove('active')
        })
        imgs.forEach(subItem => {
            subItem.style.opacity = '1'
            subItem.style.boxShadow = '10px 10px 15px #00000080';
        })
        arr[index].forEach(subItem => {
            if (mySwitch[index]) {
                for (let i = 0; i < 5; i++) {
                    imgs[subItem + i * 12].style.opacity = '.5'
                    imgs[subItem + i * 12].style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.0)'
                }
            } else {
                for (let i = 0; i < 5; i++) {
                    imgs[subItem + i * 12].style.opacity = '1'
                }
                imgs.forEach(subItem => {
                    subItem.style.boxShadow = '10px 10px 15px #00000000';
                })
            }
        })

        if (mySwitch[index]) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
        mySwitch[index] = !mySwitch[index]
        prev = index
    })
})