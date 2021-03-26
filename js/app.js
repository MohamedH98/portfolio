// NAVBAR
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector("#header");
const introArrow = document.querySelector("#intro-down-arrow");
const blogArrow = document.querySelector("#blog-arrow");
const firstKeySection = document.querySelector("#first-key-section");
const secondKeySection = document.querySelector("#second-key-section");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Hide nav when section selected
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Make navbar sticky
const sticky = navbar.offsetTop;
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Scroll into view
const bringSectionIntoView = (btn, section) => {
  btn.addEventListener("click", (e) => {
    section.scrollIntoView({ behavior: "smooth" });
  });
};

bringSectionIntoView(introArrow, secondKeySection);
bringSectionIntoView(blogArrow, firstKeySection);

// Transitions
AOS.init({
  easing: "ease-in-quad",
});

// Blog Scrolling Wrapper

const slider = document.querySelector(".scrolling-wrapper");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
