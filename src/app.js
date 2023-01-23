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
let player = [];

function genCards(Array1, Array2) {
  let genericCard = [];
  for (let i = 0; i < 3; i++) {
    genericCard[0] = Array1[Math.floor(Math.random() * Array1.length)];
    genericCard[1] = Array2[Math.floor(Math.random() * Array2.length)];
    player[i] = genericCard;
    genericCard = [];
  }
}

// Para checkear la funcion en el inspector
// genCards(iconos, valorCarta);
// console.log(player);

function shuffle() {
  genCards(iconos, valorCarta);
  console.log(player);

  let iconsCarta1 = document
    .getElementById("carta1")
    .getElementsByClassName("iconoCar1");
  iconsCarta1[0].innerHTML = player[0][0];
  iconsCarta1[1].innerHTML = player[0][0];
  document.getElementById("numberCar1").innerHTML = player[0][1];

  let iconsCarta2 = document
    .getElementById("carta2")
    .getElementsByClassName("iconoCar2");
  iconsCarta2[0].innerHTML = player[1][0];
  iconsCarta2[1].innerHTML = player[1][0];
  document.getElementById("numberCar2").innerHTML = player[1][1];

  let iconsCarta3 = document
    .getElementById("carta3")
    .getElementsByClassName("iconoCar3");
  iconsCarta3[0].innerHTML = player[2][0];
  iconsCarta3[1].innerHTML = player[2][0];
  document.getElementById("numberCar3").innerHTML = player[2][1];

  // // Esto resetea Player array
  player = ["", "", ""];
}
