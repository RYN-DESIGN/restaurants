// start hero section swiper
var swiper = new Swiper(".heroSwiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".heroSwiper-pagination",
    clickable: true
  }
});
// end of hero section swiper
// start header animation
let header = document.querySelector("header");
let menu = document.querySelector(".nav-links");
window.addEventListener("scroll", () => {
  if (this.scrollY > 120) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
// end header animation
//start nav-links highlight by getting path name
const { pathname } = window.location;
let navLinks = document.querySelectorAll(".nav-links a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.remove("active");
}
for (let i = 0; i < navLinks.length; i++) {
  const linkPathname = new URL(navLinks[i].href).pathname;
  if (linkPathname === pathname) {
    navLinks[i].classList.add("active");
  }
  if (pathname === "/") {
    navLinks[0].classList.add("active");
  }
}