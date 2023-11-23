/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
   searchClose = document.getElementById('search-close'),
   searchContent = document.getElementById('search-content');

/*===== Search SHOW =====*/
/* Validate if constant exists */
if (searchButton) {
   searchButton.addEventListener('click', () => {
      searchContent.classList.add('show-search');
   });
}

/*===== Search HIDDEN =====*/
/* Validate if constant exists */
if (searchClose) {
   searchClose.addEventListener('click', () => {
      searchContent.classList.remove('show-search');
   });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
   loginClose = document.getElementById('login-close'),
   loginContent = document.getElementById('login-content');

/*===== Login SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
   loginButton.addEventListener('click', () => {
      loginContent.classList.add('show-login');
   });
}

/*===== Login HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
   loginClose.addEventListener('click', () => {
      loginContent.classList.remove('show-login');
   });
}

/*=============== ADD SHADOW HEADER ===============*/

/*=============== HOME SWIPER ===============*/

/*=============== FEATURED SWIPER ===============*/

/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
