const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const cache = document.querySelector('.cache')


hamburger.addEventListener('click', event => {
  body.classList.toggle('open');
});

cache.addEventListener('click', event => {
    body.classList.remove('open');
  });