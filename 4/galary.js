"use strict";
let landscape = document.querySelector(".landscape");
let cards = [
  {id: 1, name: "Белые медведи", description: "Белые мишки, так удачно скомпановались, будто позируют фотографу.", image: "image/mountain.jpg"},
  {id: 2, name: "Парк Yellowstone", description: "Так загадочно и красиво в парке сдери гор вечером. ", image: "image/yellowstone.jpg"},
  {id: 3, name: "Деревья", description: "Усыпанные снегом кроны деревьев, нежно смотрятся в розовом свете солнца.", image: "image/winter-1.jpg"},
  {id: 4, name: "Розовый закат", description: "Солнце сквозь дымку создает интересную игру розово-фиолетового цвета.", image: "image/winter-2.jpg"},
  {id: 5, name: "Дом-башня", description: "Необычный домик, ввиде круглой башни, притаился в снежном лесу.", image: "image/winter-3.jpg"},
  {id: 6, name: "Церковь", description: "Церковь, на фоне снежного леса и гор, впечатляет своей красотой.", image: "image/winter-4.jpg"},
  {id: 1, name: "Скала во льду", description: "Завораживающий вид скалы, замершей среди льда, смотриться потрясающе.", image: "image/russia.jpg"},
  {id: 1, name: "Зимний простор", description: "Как прекрасны и широки зимние просторы на закате.", image: "image/winter0.jpg"},
];
createCard(cards);
function createCard(array) {
  for (let i = 0; i < array.length; i++) {
  let landscapeCards = document.createElement('div');
  landscapeCards.innerHTML = `
  <img class = "image" src=${array[i].image}>
  <p class = "id" >${array[i].id}<p>
  <h3 class = "name" >${array[i].name}<h3>
  <div class = "description" >${array[i].description}<div>
  `;
  
  landscape.append(landscapeCards);
  
  }
}