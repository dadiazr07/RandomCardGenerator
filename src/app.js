/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let iconos = ["♦", "♥", "♠", "♣"];
let valorCarta = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let colorCarta = ["red", "black"];

let iconoRandom = Math.floor(Math.random() * iconos.length + 1);
let valorRandom = Math.floor(Math.random() * valorCarta.length + 1);
let colorRandom = Math.floor(Math.random() * colorCarta.length + 1);

console.log(iconoRandom);
console.log(valorRandom);
console.log(colorRandom);
