/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input");
const button = document.getElementById("btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function generateValue() {
    console.log(input.value);
    length.innerHTML = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(3)} meters`;
    volume.innerHTML = `${input.value} liters = ${(input.value * 0.264).toFixed(3)} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liters`;
    mass.innerHTML = `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kilos`;
}

button.addEventListener("click", generateValue);
