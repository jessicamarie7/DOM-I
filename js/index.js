const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navig = document.querySelectorAll('nav a');
const navOne = navig[0];
navOne.textContent = siteContent['nav']['nav-item-1'];
const navTwo = navig[1];
navTwo.textContent = siteContent['nav']['nav-item-2'];
const navThree = navig[2];
navThree.textContent = siteContent['nav']['nav-item-3'];
const navFour = navig[3];
navFour.textContent = siteContent['nav']['nav-item-4'];
const navFive = navig[4];
navFive.textContent = siteContent['nav']['nav-item-5'];
const navSix = navig[5];
navSix.textContent = siteContent['nav']['nav-item-6'];

const headerText = document.querySelector("h1");
headerText.textContent = siteContent['cta']['h1'];

const buttonText = document.querySelector(".cta button");
buttonText.textContent = siteContent['cta']['button'];


const headerImg = document.querySelector(".cta img");
headerImg.setAttribute('src', siteContent['cta']['img-src']);

const topTitles = document.querySelector(".top-content");
const titlesFirst = topTitles.childNodes[1];
const firstH = titlesFirst.nextElementSibling;
const titlesSecond = topTitles.childNodes[3];
const secondP = titlesSecond.nextElementSibling;

const bottomTitles = document.querySelector(".bottom-content");
const titlesThird = bottomTitles.childNodes[1];
const thirdH = titlesThird.nextElementSibling;
const titlesFourth = bottomTitles.childNodes[3];
const fourthP = titlesFourth.nextElementSibling;


firstH.textContent = siteContent['main-content']['features-h4'];