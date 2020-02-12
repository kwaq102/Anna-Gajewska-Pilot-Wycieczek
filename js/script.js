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


// const navList = [...document.querySelectorAll("nav ul li")];
const sectionList = [...document.querySelectorAll("section")];


aboutMe.addEventListener('click', function () {
    sectionList.forEach(section => section.classList.remove("show"));
    sectionAbout.classList.add("show");
})

offer.addEventListener('click', function () {
    sectionList.forEach(section => section.classList.remove("show"));
    sectionOffer.classList.add("show");
})

gallery.addEventListener('click', function () {
    sectionList.forEach(section => section.classList.remove("show"));
    sectionGallery.classList.add("show");
})

contact.addEventListener('click', function () {
    sectionList.forEach(section => section.classList.remove("show"));
    sectionContact.classList.add("show");
})

// section about me

const aboutMenu = document.querySelectorAll('.about .about-menu a');

const menu = document.querySelector('.about-menu a:nth-child(1)');
const menu2 = document.querySelector('.about-menu a:nth-child(2)');
const menu3 = document.querySelector('.about-menu a:nth-child(3)');
const menu4 = document.querySelector('.about-menu a:nth-child(4)');
const menu5 = document.querySelector('.about-menu a:nth-child(5)');

const about = document.querySelector('div.about');
const experience = document.querySelector('div.experience');
const passion = document.querySelector('div.passion');


menu.addEventListener('click', function () {
    aboutMenu.forEach(a => a.classList.remove('active'));
    menu.classList.add('active');

    about.classList.add('active');
    experience.classList.remove('active');
    passion.classList.remove('active');
})

menu2.addEventListener('click', function () {
    aboutMenu.forEach(a => a.classList.remove('active'));
    menu2.classList.add('active');

    about.classList.remove('active');
    experience.classList.add('active');
    passion.classList.remove('active');
})

menu3.addEventListener('click', function () {
    aboutMenu.forEach(a => a.classList.remove('active'));
    menu3.classList.add('active');

    about.classList.remove('active');
    experience.classList.remove('active');
    passion.classList.add('active');
})

menu4.addEventListener('click', function () {
    aboutMenu.forEach(a => a.classList.remove('active'));
    menu4.classList.add('active');
})


// section offer

const menuOfferList = document.querySelectorAll('.offer .about-menu a');

const menuOffer = document.querySelector('.offer .about-menu a:nth-child(1)');
const menuOffer2 = document.querySelector('.offer .about-menu a:nth-child(2)');
const menuOffer3 = document.querySelector('.offer .about-menu a:nth-child(3)');
const menuOffer4 = document.querySelector('.offer .about-menu a:nth-child(4)');
const menuOffer5 = document.querySelector('.offer .about-menu a:nth-child(5)');

menuOffer.addEventListener('click', function () {
    menuOfferList.forEach(a => a.classList.remove('active'));
    menuOffer.classList.add('active');

})

menuOffer2.addEventListener('click', function () {
    menuOfferList.forEach(a => a.classList.remove('active'));
    menuOffer2.classList.add('active');
})


menuOffer3.addEventListener('click', function () {
    menuOfferList.forEach(a => a.classList.remove('active'));
    menuOffer3.classList.add('active');

})

menuOffer4.addEventListener('click', function () {
    menuOfferList.forEach(a => a.classList.remove('active'));
    menuOffer4.classList.add('active');
})

menuOffer5.addEventListener('click', function () {
    menuOfferList.forEach(a => a.classList.remove('active'));
    menuOffer5.classList.add('active');
})



// const spain = document.querySelector('div.spain');
// const france = document.querySelector('div.france');
// const italy = document.querySelector('div.italy');
// const portugal = document.querySelector('div.portugal');
// const other = document.querySelector('div.other');


// sekcja kontakt