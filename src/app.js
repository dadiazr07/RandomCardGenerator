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
  function iconoRandom(Array1) {
    return Array1[Math.floor(Math.random() * Array1.length)];
  }

  function valorRandom(Array2) {
    return Array2[Math.floor(Math.random() * Array2.length)];
  }
  let player = [];
  let carta1 = [];
  let carta2 = [];
  let carta3 = [];
  let icon = 0;
  let valor = 0;

  carta1.push(iconoRandom(Array1));
  carta1.push(valorRandom(Array2));
  icon = iconoRandom(Array1);
  valor = valorRandom(Array2);

  if (icon == carta1[0]) {
    icon = iconoRandom(Array1);
    valor = valorRandom(Array2);
    carta2.push(icon);
    carta2.push(valor);
  } else {
    carta2.push(icon);
    carta2.push(valor);
  }

  if (icon == carta1[0] || icon == carta2[0]) {
    icon = iconoRandom(Array1);
    valor = valorRandom(Array2);
    carta3.push(icon);
    carta3.push(valor);
  } else {
    carta3.push(icon);
    carta3.push(valor);
  }
  player.push(carta1);
  player.push(carta2);
  player.push(carta3);
  return player;
}
console.log(genCards(iconos, valorCarta));
