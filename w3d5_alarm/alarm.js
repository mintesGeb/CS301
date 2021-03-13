// alert("hi");
// window.onload = pageLoad;
// selectors
const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const gobutton = document.getElementById("go");
const timer = document.getElementById("timer");

function pageLoad() {
  gobutton.onclick = register;
} 
// function register() {
//   let minute = parseFloat(min.value);
//   let second = parseFloat(sec.value);
//   let distance =
//   let output = minute + "m " + second + "s ";
//   timer.innerHTML = output;
// }

let register = setInterval(function () {
  let hour = parseFloat(hr.value);
  let minute = parseFloat(min.value);
  let second = parseFloat(sec.value);

  let time = new Date(`March 13, 2021 ${hour}:${minute}:${second}`).getTime();
  let now = new Date().getTime();

  let distance = time - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(register);
    timer.innerHTML = "expired";
  }
}, 1000);

// let register = setInterval(function () {
//     let hour = parseFloat(hr.value);
//     let minute = parseFloat(min.value);
//     let second = parseFloat(sec.value);

//     let time = new Date(`March 13, 2021 ${hour}:${minute}:${second}`).getTime();
//     let now = new Date().getTime();

//     let distance = time - now;

//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     timer.innerHTML =
//       days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//     if (distance < 0) {
//       clearInterval(register);
//       timer.innerHTML = "expired";
//     }
//   }, 1000);
