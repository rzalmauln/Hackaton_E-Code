const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggle.onclick = () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
};

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("bg-putih", window.scrollY > 50);
});
