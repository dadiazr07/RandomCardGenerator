/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("shuffle").addEventListener("click", shuffle);
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
let player = ["", "", ""];

// // Funcion paga generar valores e iconos aleatorios

function genCards(Array1, Array2) {
  let carta1 = ["", ""];
  let carta2 = ["", ""];
  let carta3 = ["", ""];

  function iconoRandom(Array1) {
    let pinta = Array1[Math.floor(Math.random() * Array1.length)];
    return pinta;
  }

  function valorRandom(Array2) {
    let numeroCarta = Array2[Math.floor(Math.random() * Array2.length)];
    return numeroCarta;
  }

  function card1() {
    let pinta1 = iconoRandom(Array1);
    let numeroCarta = valorRandom(Array2);
    carta1[0] = pinta1;
    carta1[1] = numeroCarta;
    player[0] = carta1;
    numeroCarta = "";
  }

  function card2() {
    let pinta2 = iconoRandom(Array1);
    let numeroCarta = valorRandom(Array2);
    carta2[0] = pinta2;
    carta2[1] = numeroCarta;
    player[1] = carta2;
    numeroCarta = "";
  }

  function card3() {
    let pinta3 = iconoRandom(Array1);
    let numeroCarta = valorRandom(Array2);
    carta3[0] = pinta3;
    carta3[1] = numeroCarta;
    player[2] = carta3;
    numeroCarta = "";
  }

  card1();
  card2();
  card3();
  return player;
}

// Para chckear la funcion en el inspector
// genCards(iconos, valorCarta);
// console.log(player);

function shuffle() {
  genCards(iconos, valorCarta);
  console.log(player);
  player = ["", "", ""];
  // document.getElementById("icono").innerHTML = player[0][0];
}
