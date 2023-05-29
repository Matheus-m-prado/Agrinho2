let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let tree = document.getElementById('tree');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let button1 = document.getElementById('button1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.6 + 'px';
    hill4.style.left = value * -1.2 + 'px';
    tree.style.left = value * 1.4 + 'px';
    button1.style.marginTop = value * 1 + 'px';
});









const btnMobile = document.getElementById("btn-mobile");

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
