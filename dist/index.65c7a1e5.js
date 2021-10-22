const mobileMenuBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav__bar');
const body = document.querySelector('body');
mobileMenuBtn.addEventListener('click', ()=>{
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenuBtn.classList.contains('is-active') ? mobileMenuBtn.ariaExpanded = true : mobileMenuBtn.ariaExpanded = false;
    navBar.classList.toggle('open');
    body.classList.toggle('nav__open');
});

//# sourceMappingURL=index.65c7a1e5.js.map
