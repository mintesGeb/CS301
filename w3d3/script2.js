// alert("Hi");
const btnRed = document.querySelector(".red");
const btnYellow = document.querySelector(".yellow");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btnRed.addEventListener("click", function () {
  h1.style.color = "red";
});
function doSomething() {
  h1.style.color = "Yellow";
}
