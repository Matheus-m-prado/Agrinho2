let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let tree = document.getElementById('tree');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let button1 = document.getElementById('button1');


window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    text.style.marginTop = scroll * .9 + 'px';
    leaf.style.left = scroll * 1.2 + 'px';
    hill5.style.left = scroll * .5 + 'px';
    hill4.style.left = scroll * -1 + 'px';
    tree.style.left = scroll * 1.2 + 'px';
    button1.style.marginTop = scroll * .8 + 'px';
});






const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementsByClassName("menu");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}



btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


// Menu fecha ao ser clicado
const menuf1 = document.querySelector('.btn1');
const menuf2 = document.querySelector('.btn2');
const menuf3 = document.querySelector('.btn3');
menuf1.addEventListener('click', function(){
  nav.classList.remove('active');
});
menuf2.addEventListener('click', function(){
  nav.classList.remove('active');
});
menuf3.addEventListener('click', function(){
  nav.classList.remove('active');
});








// SCROLL
window.sr = ScrollReveal({ reset: true });
sr.reveal(".scroll", {duration: 1800, distance: '70px', origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', opacity: 0});
sr.reveal(".scroll2", {duration: 1800, distance: '70px', origin: 'top', easing: 'cubic-bezier(0.5, 0, 0, 1)', opacity: 0});
sr.reveal(".scroll3", {duration: 1800, distance: '70px', origin: 'left', easing: 'cubic-bezier(0.5, 0, 0, 1)', opacity: 0});
sr.reveal(".scroll4", {duration: 1800, distance: '70px', origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', opacity: 0});

// Menu que muda ao scrollar
window.addEventListener('scroll', function(){
  var menu = document.querySelector('#header');
  menu.classList.toggle('sticky', window.scrollY > 0);
});









document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animated", {
    speed: 150,
    loop: true,
  })
  .type('empatia', {delay: 1500}).delete(7).type("solidariedade", {delay: 1500})
  .go()
})