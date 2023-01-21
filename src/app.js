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

function genCards(Array1, Array2) {
  let carta1 = [];
  let carta2 = [];
  let carta3 = [];

  function iconoRandom(Array1) {
    return Array1[Math.floor(Math.random() * Array1.length)];
  }

  function valorRandom(Array2) {
    return Array2[Math.floor(Math.random() * Array2.length)];
  }

  carta1.push(iconoRandom(Array1));
  carta1.push(valorRandom(Array2));
  iconoRandom(Array1);
  valorRandom(Array2);
  carta2.push(iconoRandom(Array1));
  carta2.push(valorRandom(Array2));
  iconoRandom(Array1);
  valorRandom(Array2);
  carta3.push(iconoRandom(Array1));
  carta3.push(valorRandom(Array2));

  console.log(carta1);
  console.log(carta2);
  console.log(carta3);
}

console.log(genCards(iconos, valorCarta));
