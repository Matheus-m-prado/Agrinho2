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

// Scroll
window.sr = ScrollReveal({ reset: false });
sr.reveal(".scroll", {
  duration: 1800,
  distance: "70px",
  origin: "bottom",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  opacity: 0,
});
sr.reveal(".scroll2", {
  duration: 1800,
  distance: "70px",
  origin: "top",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  opacity: 0,
});
sr.reveal(".scroll3", {
  duration: 1800,
  distance: "70px",
  origin: "left",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  opacity: 0,
});
sr.reveal(".scroll4", {
  duration: 1800,
  distance: "70px",
  origin: "right",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  opacity: 0,
});














































