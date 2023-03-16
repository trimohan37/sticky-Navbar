const nav = document.querySelector(".nav");

window.onscroll = function () {
  myfunction();
};
var navbar = document.querySelector(".nav");
var sticky = navbar.offsetTop;
function myfunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
