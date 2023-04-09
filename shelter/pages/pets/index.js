const btnLight = document.querySelector('#btnLight');
const body = document.querySelector('body');
const popupLinks = document.querySelectorAll('.friends__item');
// const lockPadding; 
let unlock = true;
const timeout = 500;
console.log(popupLinks);

if(popupLinks.length > 0) {
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const currentPopup = document.getElementsByClassName('.friends__item');
            popupOpen(currentPopup);    
        });
    }
    
}

function popupOpen(currentPopup) {
    currentPopup.classList.add('.open');
        // currentPopup.addEventListener('click', function (e) {
        //     if(!e.target.closest('.popup__content')) {
        //     popupClose(e.target.closest('.popup'));
        //     }   
        // });
}

// function popupOpen(currentPopup) {
//     currentPopup.classList.add('.open');
//         currentPopup.addEventListener('click', function (e) {
//             if(!e.target.closest('.popup__content')) {
//             popupClose(e.target.closest('.popup'));
//             }   
//         });
// }
// function popupOpen(currentPopup) {
//     if (currentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if(popupActive) {
//             popupClose(popupActive, false);
//         // } else {
//         //     bodyLock();
//         }

//         currentPopup.classList.add('.open');
//         currentPopup.addEventListener('click', function (e) {
//             if(!e.target.closest('.popup__content')) {
//             popupClose(e.target.closest('.popup'));
//             }   
//         });
//     }
// }

function popupClose(popupActive) {
    if(unlock) {
        popupActive.classList.remove('open');
    }
}

btnLight.addEventListener('click', function() {
    body.classList.toggle('stop-scroll');
    document.querySelector('.header').classList.toggle('open')
})



// const overlay = document.querySelector('.overlay');
const petsContainer = document.getElementById('pets');
const pagination = document.querySelector('.friends__pagination');
const currentPageNumber = document.querySelector('.friends__control.friends__control--active');
const firstBtn = document.querySelector('[data-btn="first"]');
const prevBtn = document.querySelector('[data-btn="prev"]');
const nextBtn = document.querySelector('[data-btn="next"]');
const lastBtn = document.querySelector('[data-btn="last"]');
const inactiveLinks = document.querySelectorAll('a.inactive');

let fullPetsList = [];

let currentPage = 1;
let petsPerPage = 8;

const pets = [
  {
    image: '../../assets/images/pets-sophia.svg',
    alt: 'Sophia',
    title: 'Sophia',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-timmy.svg',
    alt: 'Timmy',
    title: 'Timmy',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-charly.svg',
    alt: 'Charly',
    title: 'Charly',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-katrine.svg',
    alt: 'Katrine',
    title: 'Katrine',
    button: 'Learn more'
  },
   {
    image: '../../assets/images/pets-jennifer.svg',
    alt: 'Jennifer',
    title: 'Jennifer',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-woody.svg',
    alt: 'Woody',
    title: 'Woody',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-scarlet.svg',
    alt: 'Scarlett',
    title: 'Scarlett',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-katrine.svg',
    alt: 'Freddie',
    title: 'Freddie',
    button: 'Learn more'
  },
  {
    image: '../../assets/images/pets-katrine.svg',
    alt: 'Katrine',
    title: 'Katrine',
    button: 'Learn more'
  },
];

function main() {}

// fullPetsList = (() => {
//         let tempArr = [];

//         for (let i = 0; i < 6; i++) {
//             const shuffledPets = pets;

//             for (let j = pets.length; j > 0; j--) {
//                 const randomIndex = Math.floor(Math.random() * j);
//                 const randomElement = shuffledPets.splice(randomIndex, 1)[0];
//                 shuffledPets.push(randomElement);
//             }

//             tempArr = [...tempArr, ...shuffledPets];
//         }

//         console.log(tempArr);
//         return tempArr;
//     })();

//     fullPetsList = sortSixElements(fullPetsList);

//     checkPetsPerPage();
//     displayPets(fullPetsList, petsPerPage, currentPage);

//     function sortSixElements(list) {
//     const length = list.length;

//     for (let i = 0; i < (length / 6); i++) {
//         const stepList = list.slice(i * 6, (i * 6) + 6);

//         for (let j = 0; j < 6; j++) {
//             const duplicatedElement = stepList.find((item, index) => {
//                 return item.name == stepList[j].name && index != j;
//             })

//             if (duplicatedElement !== undefined) {
//                 const index = (i * 6) + j;
//                 const inWhichEight = Math.trunc(index / 8);

//                 const movedElement = list.splice(index, 1)[0];
//                 list.splice(inWhichEight * 8, 0, movedElement);

//                 sortSixElements(list);
//             }
//         }
//     }

//     return list;
// }

// function createPetCard(card) {
//     return `
//     <div class="cards__item">
//       <img src="${card.image}" alt="${card.alt}" class="cards__image">
//       <span class="cards__title">${card.title}</span>
//       <button class="cards__button">${card.button}</button>
//     </div>
//       `
// }

// function checkPetsPerPage() {
//     const width = document.querySelector('body').offsetWidth;

//     if (width >= 1280) {
//         petsPerPage = 8;
//     } else if (width < 1280 && width >= 768) {
//         petsPerPage = 6;
//     } else if (width < 768) {
//         petsPerPage = 3;
//     }
    
//     return petsPerPage;
// }

// function displayPets(items, itemsPerPage, page) {
//     petsContainer.innerHTML = '';

//     let start = itemsPerPage * page;
//     let end = start + itemsPerPage;
//     let paginatedItems = items.slice(start, end);

//     petsContainer.innerHTML = paginatedItems.map(createPetCard).join('');
// }

// function setupPagination(direction) {
//     checkPetsPerPage();

//     switch(direction) {
//         case 'first':
//             currentPage = 0;
//             break;
//         case 'prev':
//             if (currentPage == 0) return;
//             currentPage = currentPage - 1;
//             break;
//         case 'next':
//             if (currentPage == (fullPetsList.length / petsPerPage - 1)) return;
//             currentPage = currentPage + 1;
//             break;
//         case 'last':
//             currentPage = fullPetsList.length / petsPerPage - 1;
//             break;
//         default:
//             return;
//     }

//      paginationButtons();
//     displayPets(fullPetsList, petsPerPage, currentPage);
// }

// function paginationButtons() {
//     currentPageNumber.innerText = currentPage + 1;

//     document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('inactive'));

//     if (currentPage == 0) {
//         firstBtn.classList.add('inactive');
//         prevBtn.classList.add('inactive');
//     }
//     if (currentPage == fullPetsList.length / petsPerPage - 1) {
//         lastBtn.classList.add('inactive');
//         nextBtn.classList.add('inactive');
//     }
// }

// pagination.addEventListener('click', (e) => {
//     if (!e.target.classList.contains('friends__control') || e.target.classList.contains('friends__control--active')) return;
//     const btn = e.target.dataset.btn;
//     setupPagination(btn);
// })

// window.addEventListener('resize', () => {
//     checkPetsPerPage();
//     displayPets(fullPetsList, petsPerPage, currentPage);
// })