/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("shuffle").addEventListener("click", shuffle);

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
    let pinta = Array1[Math.floor(Math.random() * Array1.length)];
    let numValue = Array2[Math.floor(Math.random() * Array2.length)];

    genericCard[0] = pinta;
    genericCard[1] = numValue;
    player[i] = genericCard;
    genericCard = [];
  }
}

// Para checkear la funcion en el inspector
// genCards(iconos, valorCarta);
// console.log(player);

function shuffle() {
  genCards(iconos, valorCarta);

  let iconsCarta1 = document.getElementsByClassName("iconoCar1");
  iconsCarta1[0].innerHTML = player[0][0];
  iconsCarta1[1].innerHTML = player[0][0];
  document.getElementById("numberCar1").innerHTML = player[0][1];

  let iconsCarta2 = document.getElementsByClassName("iconoCar2");
  iconsCarta2[0].innerHTML = player[1][0];
  iconsCarta2[1].innerHTML = player[1][0];
  document.getElementById("numberCar2").innerHTML = player[1][1];

  let iconsCarta3 = document.getElementsByClassName("iconoCar3");
  iconsCarta3[0].innerHTML = player[2][0];
  iconsCarta3[1].innerHTML = player[2][0];
  document.getElementById("numberCar3").innerHTML = player[2][1];

  // Actualizar y activar animacion
  let elements = ["carta1", "carta2", "carta3"].map(id =>
    document.getElementById(id)
  );
  elements.forEach(element => {
    element.style.animation = "none";
    element.offsetHeight;
    element.style.animation = null;
  });

  // // Esto resetea Player array
  player = [];
}
