//start menu================================
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
burger.addEventListener("click", function () {
  nav.classList.toggle("force-show");
  burger.classList.toggle("burger-opened");
});
//start loader===============================
let animatedElements = document.querySelectorAll(".no-animation");
window.onload = function () {
  document.querySelector(".loader").style.display = "none";
  animatedElements.forEach((e) => {
    e.classList.remove("no-animation");
  });
};
//scroll effect =============================
const spaceHolder = document.querySelector(".space-holder");
const horizontal = document.querySelector(".horizontal");
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 50; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener("scroll", () => {
  const sticky = document.querySelector(".sticky");
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener("resize", () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
