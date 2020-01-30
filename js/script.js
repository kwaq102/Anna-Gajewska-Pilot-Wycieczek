// menu hamburger
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener("click", function () {
    burger.classList.toggle("on");
    nav.classList.toggle("on");
})

// pokazanie sekcji

const aboutMe = document.querySelector('nav ul li:nth-child(2)');
const offer = document.querySelector('nav ul li:nth-child(3)');
const gallery = document.querySelector('.photo');
const contact = document.querySelector('.show-contact');

const sectionAbout = document.querySelector('.about');
const sectionOffer = document.querySelector('.offer');
const sectionGallery = document.querySelector('.gallery');
const sectionContact = document.querySelector('.contact');

aboutMe.addEventListener('click', function () {
    sectionAbout.classList.add('show');
    sectionOffer.classList.remove('show');
    sectionGallery.classList.remove('show');
    sectionContact.classList.remove('show');
})

offer.addEventListener('click', function () {
    sectionAbout.classList.remove('show');
    sectionOffer.classList.add('show');
    sectionGallery.classList.remove('show');
    sectionContact.classList.remove('show');
})

gallery.addEventListener('click', function () {
    sectionAbout.classList.remove('show');
    sectionOffer.classList.remove('show');
    sectionGallery.classList.add('show');
    sectionContact.classList.remove('show');
})

contact.addEventListener('click', function () {
    sectionAbout.classList.remove('show');
    sectionOffer.classList.remove('show');
    sectionGallery.classList.remove('show');
    sectionContact.classList.add('show');
    console.log('sddd')
})

// sekcja o mnie

const aboutMenu = document.querySelectorAll('.about-menu a');

const menu = document.querySelector('.about-menu a:nth-child(1)');
const menu2 = document.querySelector('.about-menu a:nth-child(2)');
const menu3 = document.querySelector('.about-menu a:nth-child(3)');
const menu4 = document.querySelector('.about-menu a:nth-child(4)');

const about = document.querySelector('div.about');
const experience = document.querySelector('div.experience');
const passion = document.querySelector('div.passion');


menu.addEventListener('click', function () {
    menu.classList.add('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active');

    about.classList.add('active');
    experience.classList.remove('active');
    passion.classList.remove('active');
})

menu2.addEventListener('click', function () {
    menu.classList.remove('active');
    menu2.classList.add('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active')

    about.classList.remove('active');
    experience.classList.add('active');
    passion.classList.remove('active');

})

menu3.addEventListener('click', function () {
    menu.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.add('active');
    menu4.classList.remove('active')

    about.classList.remove('active');
    experience.classList.remove('active');
    passion.classList.add('active');
})

menu4.addEventListener('click', function () {
    menu.classList.remove('active');
    menu2.classList.remove('active');
    menu3.classList.remove('active');
    menu4.classList.add('active')
})


// querySelectorAll zwraca Ci NodeList, więc musisz przeiterować po niej przez forEach np.
// aboutMenu.forEach(el => el.addEventListener("click", function () {
// console.log('działa');
// }));

// const allMenus = [].slice.call(document.querySelectorAll('.menu'));
// allMenus.forEach(menu => menu.addEventListener('click', () => console.log('test')));


// sekcja oferta

const menuOffer = document.querySelector('.offer .about-menu a:nth-child(1)');
const menuOffer2 = document.querySelector('.offer .about-menu a:nth-child(2)');
const menuOffer3 = document.querySelector('.offer .about-menu a:nth-child(3)');
const menuOffer4 = document.querySelector('.offer .about-menu a:nth-child(4)');
const menuOffer5 = document.querySelector('.offer .about-menu a:nth-child(5)');

const spain = document.querySelector('div.spain');
const france = document.querySelector('div.france');
const italy = document.querySelector('div.italy');
const portugal = document.querySelector('div.portugal');
const other = document.querySelector('div.other');


menuOffer.addEventListener('click', function () {
    menuOffer.classList.add('active');
    menuOffer2.classList.remove('active');
    menuOffer3.classList.remove('active');
    menuOffer4.classList.remove('active');
    menuOffer5.classList.remove('active');

})

menuOffer2.addEventListener('click', function () {
    menuOffer.classList.remove('active');
    menuOffer2.classList.add('active');
    menuOffer3.classList.remove('active');
    menuOffer4.classList.remove('active');
    menuOffer5.classList.remove('active');

})

menuOffer3.addEventListener('click', function () {
    menuOffer.classList.remove('active');
    menuOffer2.classList.remove('active');
    menuOffer3.classList.add('active');
    menuOffer4.classList.remove('active');
    menuOffer5.classList.remove('active')

})

menuOffer4.addEventListener('click', function () {
    menuOffer.classList.remove('active');
    menuOffer2.classList.remove('active');
    menuOffer3.classList.remove('active');
    menuOffer4.classList.add('active');
    menuOffer5.classList.remove('active');
})

menuOffer5.addEventListener('click', function () {
    menuOffer.classList.remove('active');
    menuOffer2.classList.remove('active');
    menuOffer3.classList.remove('active');
    menuOffer4.classList.remove('active')
    menuOffer5.classList.add('active');
})

// sekcja kontakt