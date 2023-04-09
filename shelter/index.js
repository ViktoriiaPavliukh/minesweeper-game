const burgerBtn = document.querySelector('#burgerBtn');

const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');
const slider = document.querySelector('#slider');
const carousel = document.querySelector('#carousel');
const images = document.querySelectorAll('.cards__image');
const body = document.querySelector('body');
const leftItems = document.querySelector('#items-left');
const rightItems = document.querySelector('#items-right');
const set = document.querySelector('.cards__set');
const cardsArr = [
  {
    image: 'assets/images/pets-sophia.svg',
    alt: 'Sophia',
    title: 'Sophia',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-timmy.svg',
    alt: 'Timmy',
    title: 'Timmy',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-charly.svg',
    alt: 'Charly',
    title: 'Charly',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-katrine.svg',
    alt: 'Katrine',
    title: 'Katrine',
    button: 'Learn more'
  },
   {
    image: 'assets/images/pets-jennifer.svg',
    alt: 'Jennifer',
    title: 'Jennifer',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-woody.svg',
    alt: 'Woody',
    title: 'Woody',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-scarlet.svg',
    alt: 'Scarlett',
    title: 'Scarlett',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-katrine.svg',
    alt: 'Freddie',
    title: 'Freddie',
    button: 'Learn more'
  },
  {
    image: 'assets/images/pets-katrine.svg',
    alt: 'Katrine',
    title: 'Katrine',
    button: 'Learn more'
  },
];

console.log(typeof cardsArr);

burgerBtn.addEventListener('click', function() {
    body.classList.toggle('stop-scroll');
    document.querySelector('.background').classList.toggle('open')
})

  

  

const createCardTemplate = () => {
  const card = document.createElement('div');
  card.classList.add("cards__item");
  return card;
}

const moveLeft = () => {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

const moveRight = () => {
    carousel.classList.add('transition-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

carousel.addEventListener('animationend', (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === 'move-left') {
        carousel.classList.remove('transition-left');
        changedItem = leftItems;
        document.querySelector('#items-active').innerHTML = leftItems.innerHTML;
    } else {
        carousel.classList.remove('transition-right');
        changedItem = rightItems;
        document.querySelector('#items-active').innerHTML = rightItems.innerHTML;
    }

    changedItem.innerHTML = "";
    const index = Math.floor(Math.random() * cardsArr.length);
    const card = cardsArr[index];
    const cardHtml = `
    <div class="cards__item">
      <img src="${card.image}" alt="${card.alt}" class="cards__image">
      <span class="cards__title">${card.title}</span>
      <button class="cards__button">${card.button}</button>
    </div>
      `;
    // for (let i = 0; i < 3; i++) {
    // const card = createCardTemplate();
    // card.innerText = Math.floor(Math.random() * 8);
    // changedItem.appendChild(cardHtml);

    
    if(btnLeft.addEventListener('click', moveLeft)){
        set.insertAdjacentHTML('beforeend', cardHtml);
    };
    if(btnRight.addEventListener('click', moveRight)){
        set.insertAdjacentHTML('afterend', cardHtml);
    };
})



// btnRight.addEventListener('click', () => {
//     alert('hi');
//     turnOffBtns()
//     carousel.style.transform = `translateX(-${document.querySelector('.cards__carousel').clientWidth}px)`
//     turnOnBtns()
//     carousel.style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
// })

// let petsArr = [];
// let index = 0;
// let cardsPerPage = 1;

// fetch('./pets.json')
//     .then(res => res.json())
//     .then(list => {
//         petsArr = list;

//         for (let i = pets.length; i > 0; i--) {
//             const randomIndex = Math.floor(Math.random() * i);
//             const randomElement = petsArr.splice(randomIndex, 1)[0];
//             petsArr.push(randomElement);
//         }

//         checkCardsPerPage();
//         displayPets(petsArr);

//         const cards = Array.from(document.querySelectorAll('.cards__item')).slice(index, index + cardsPerPage);
//         showActiveCards(cards);

//     })

//     function createPetCard(pet) {
//     return `
//         <div class="card" data-pet="${pet.name}">
//             <img src="${pet.img}" alt="cat">
//             <p class="card-title">${pet.name}</p>
//             <button class="card-button">Learn more</button>
//         </div>
//     `;
// }

// function displayPets(petsList) {
//     petsSlide.innerHTML = petsList.map(createPetCard).join('');
// }

// function showActiveCards(activeCards) {
//     document.querySelectorAll('.cards__item').forEach(card => card.classList.remove('active'));
//     activeCards.forEach(card => card.classList.add('active'));
// }

// function checkCardsPerPage() {
//     const width = document.querySelector('body').offsetWidth;

//     if (width >= 1280) {
//         cardsPerPage = 3;
//     } else if (width < 1280 && width >= 768) {
//         cardsPerPage = 2;
//     } else if (width < 768) {
//         cardsPerPage = 1;
//     }
    
//     return cardsPerPage;
// }

// slider.addEventListener('click', (e) => {
//     const petCards = Array.from(document.querySelectorAll('.cards__item'));
//     const selectedPet = e.target.closest('.card');
//     // const prevButton = e.target.closest('.cards__control--left');
//     // const nextButton = e.target.closest('.cards__control--right');

//     btnRight.addEventListener('click', () => {
//     alert('Hi');
// })
//     if (e.target == nextButton) {
//         checkCardsPerPage();

//         if (cardsPerPage == 1 && index == petCards.length - cardsPerPage) {
//             index = 0;
//         } else if (cardsPerPage == 2 && (index == 6 || index == 7)) {
//             index = 0;
//         } else if (cardsPerPage == 3 && (index == 5 || index == 6 || index == 7)) {
//             index = 0;
//         } else {
//             index = index + cardsPerPage;
//         }
//         const activeCards = petCards.slice(index, index + cardsPerPage);
//         showActiveCards(activeCards);
//     }

//     if (e.target == prevButton) {
//         checkCardsPerPage();

//         if (cardsPerPage == 1) {
//             if (index == 0) {
//                 index = petCards.length - cardsPerPage;
//              } else {
//                 index = index - cardsPerPage;
//              }
//         } else if (cardsPerPage == 2) {
//             if (index == 0 || index == 1) {
//                 index = petCards.length - cardsPerPage;
//              } else {
//                 index = index - cardsPerPage;
//              }
//         } else {
//             if (index == 0 || index == 1 || index == 2) {
//                 index = petCards.length - cardsPerPage + 1;
//              } else {
//                 index = index - cardsPerPage;
//              }
//         }

//         activeCards = petCards.slice(index, index + cardsPerPage);
//         showActiveCards(activeCards);
//     }

//     if (selectedPet) {
//         const petName = selectedPet.dataset.pet;
//         const petInfo = pets.find(pet => pet.name == petName);
//         petModal.setContent(petInfo);
//         petModal.open();
//     }
// })
// const cardsArr = [
//     `<div class="cards__item cards__item--katrine">
//         <img src="../../assets/images/pets-katrine.svg" alt="Katrine">
//         <span class="cards__subtitle">Katrine</span>
//         <button class="cards__button">Learn more</button>
//     </div>`, 
//     `<div class="cards__item cards__item--jennifer">
//         <img src="../../assets/images/pets-jennifer.svg" alt="Jennifer">
//         <span class="cards__subtitle">Jennifer</span>
//         <button class="cards__button">Learn more</button>
//     </div>`,
//     `<div class="cards__item cards__item--woody">
//         <img src="../../assets/images/pets-woody.svg" alt="Woody">
//         <span class="cards__subtitle">Woody</span>
//         <button class="cards__button">Learn more</button>
//     </div>`,
//     `<div class="cards__item cards__item--sophia">
//         <img src="../../assets/images/pets-sophia.svg" alt="Sophia">
//         <span class="cards__subtitle">Sophia</span>
//         <button class="cards__button">Learn more</button>
//     </div>`,
//     `<div class="cards__item cards__item--timmy">
//         <img src="../../assets/images/pets-timmy.svg" alt="Timmy">
//         <span class="cards__subtitle">Timmy</span>
//         <button class="cards__button">Learn more</button>
//     </div>`,
//     `<div class="cards__item cards__item--charly">
//         <img src="../../assets/images/pets-charly.svg" alt="Charly">
//         <span class="cards__subtitle">Charly</span>
//         <button class="cards__button">Learn more</button>
//     </div>`,
//     `<div class="cards__item carnds__item--scarlett">
//         <img src="../../assets/images/pets-scarlet.svg" alt="Scarlett">
//         <span class="cards__subtitle">Scarlett</span>
//         <button class="cards__button">Learn more</button>
//     </div>`,
//     `<div class="cards__item cards__item--freddie">
//         <img src="../../assets/images/pets-katrine.svg" alt="Freddie">
//         <span class="cards__subtitle">Freddie</span>
//         <button class="cards__button">Learn more</button>
//     </div>`]
 
// let cardsQuantity = 3;
// let transitionTime = 1;
// let timeoutTime = 1000;

// if (window.innerWidth < 768) {
//     transitionTime = 0.5
//     timeoutTime = 500
// }

// window.addEventListener('resize', () => {
//     if (window.innerWidth < 768) {
//         transitionTime = 0.5
//         timeoutTime = 500
//     } 
//     if (window.innerWidth >= 768) {
//         transitionTime = 1
//         timeoutTime = 1000
//     }
// })

// //1280

// const randomCards = (cardsNum) => {
//     const nums = new Set();
//     while(nums.size !== cardsNum) {
//         nums.add(Math.floor(Math.random() * 8));
//     }
//     return [...nums]
// }

// const createCardsRandomWrapper = () => {
//     const wrapper = document.createElement('div')
//     const randomArr = randomNums(cardsQuantity)
//     wrapper.className = 'renamewrapper'
//     randomArr.map(el => wrapper.innerHTML += cardsArr[el])
//     return wrapper
// }

// const createDefaultCardsWrapper = () => {
//     const wrapper = document.createElement('div')
//     const numsArr = [...Array(cardsQuantity).keys()]
//     wrapper.className = 'reename2wrapper'
//     numsArr.map(el => wrapper.innerHTML += cardsArr[el])
// }

// const rightBtnAppendRemove = () => {
//     cardsArr.removeChild(cardsArr.firstElementChild)
//     cardsArr.append(createCardsRandomWrapper())
//     cardsArr.removeChild(cardsArr.firstElementChild)
//     cardsArr.prepend(createCardsRandomWrapper())
// }

// const leftBtnAppendRemove = () => {
//     cardsArr.removeChild(cardsArr.lastElementChild)
//     cardsArr.append(createCardsRandomWrapper())
//     cardsArr.removeChild(cardsArr.lastElementChild)
//     cardsArr.prepend(createCardsRandomWrapper())
// }

// const turnOffBtns = () => {
//     rightBtnAppendRemove.style.pointerEvents = 'none'
//     leftBtnAppendRemove.style.pointerEvents = 'none'
// }

// const turnOnBtns = () => {
//     rightBtnAppendRemove.style.pointerEvents = 'all'
//     leftBtnAppendRemove.style.pointerEvents = 'all'
// }

// cardsArr.append(createCardsRandomWrapper())
// cardsArr.append(createDefaultCardsWrapper())
// cardsArr.append(createCardsRandomWrapper())

// btnRight.addEventListener('click', () => {
//     alert('hi');
//     turnOffBtns()
//     carousel.style.transform = `translateX(-${document.querySelector('.cards__sliderJS').clientWidth}px)`
//     turnOnBtns()
//     carousel.style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
// })




// let offset = 0;

// btnRight.addEventListener('click', function(){
//     offset = offset + slider.offsetWidth;

//     if(offset > 990) {
//         offset = 0;
//     }
//     carousel.style.left = -offset + 'px';
// })

// btnLeft.addEventListener('click', function(){
//     offset = offset - slider.offsetWidth;
//     carousel.style.left = offset + 'px';
// })
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





