function setHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
if (window.innerWidth <= 992) setHeight();
window.addEventListener("resize", () => {
  if (window.innerWidth <= 992) setHeight;
});
