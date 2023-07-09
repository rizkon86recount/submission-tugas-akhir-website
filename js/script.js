// toggle class aktif untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik maka aktif
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar elemen jika mau menutup hamburger tanpa harus mengklik hamburger menu lagi
const gorengan = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!gorengan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
