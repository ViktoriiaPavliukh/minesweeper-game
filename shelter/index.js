const burgerBtn = document.querySelector('#burgerBtn');

const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');
const carousel = document.querySelector('#carousel');
const images = document.querySelectorAll('.cards__image');
const slider = document.querySelector('#slider');

burgerBtn.addEventListener('click', function() {
    document.querySelector('.background').classList.toggle('open')
    
})


let offset = 0;

btnRight.addEventListener('click', function(){
    offset = offset + slider.offsetWidth;

    if(offset > 990) {
        offset = 0;
    }
    carousel.style.left = -offset + 'px';
})

btnLeft.addEventListener('click', function(){
    offset = offset - slider.offsetWidth;
    carousel.style.left = -offset + 'px';
})
// let count = 0;
// let width;

// function init() {
//     console.log('resize');
//     width = slider.offsetWidth;
//     carousel.getElementsByClassName.width = width*images.length + 'px';
//     images.forEach( item => {
//         item.style.width = width + 'px'
//         item.style.height = 'auto';
//     })
//     rollSlider();
// }
// window.addEventListener('resize', init);
// init();


// btnRight.addEventListener('click', function() {
//     count++;
//     if (count < images.length) {
//         count = 0;
//     }
//     rollSlider();
// });

// function rollSlider() {
//     carousel.style.transform = 'translate(- '+ count * width+'px)';
// }



// const moveLeft = () => {
//     carousel.classList.add('transition-left');
//     btnLeft.removeEventListener('click', moveLeft);
//     btnRight.removeEventListener('click', moveRight);
// }

// const moveRight = () => {
//     carousel.classList.add('transition-right');
//     btnLeft.removeEventListener('click', moveLeft);
//     btnRight.removeEventListener('click', moveRight);
// }

// carousel.addEventListener('animationend', (animationEvent) => {
//     if (animationEvent.animationName === 'move-left') {
//         carousel.classList.remove('transition-left');
//         const leftItems = document.querySelector('#items-left').innerHTML;
//         document.querySelector('#active-items').innerHTML = leftItems
//     } else {
//         carousel.classList.remove('transition-right');
//     }
    
//     btnLeft.addEventListener('click', moveLeft);
//     btnRight.addEventListener('click', moveRight);
// })
// console.log()


// btnLeft.addEventListener('click', moveLeft);
// btnRight.addEventListener('click', moveRight);

