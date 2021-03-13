// alert("hi");

// selector
const subtotal = document.getElementById("subtotal");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const calcButton = document.getElementById("btn");

function calcTip() {
  const totalTip = (parseFloat(subtotal.value) * parseFloat(tip.value)) / 100;
  total.innerHTML = parseFloat(subtotal.value) + totalTip;
}
