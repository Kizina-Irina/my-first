"use strict";
let modalWindow = document.querySelector(".modal-window");
let display = modalWindow.getAttribute("display");
let openButton = document.querySelector(".open-modal-button");
let modal = document.querySelector(".modal");
let closeItems = document.querySelector(".close-times-button");
let closeButton = document.querySelector(".close-button");

openButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeItems.addEventListener("click", () => {
  modal.style.display = "none";
});

openButton.addEventListener("click", () => {
  modalWindow.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

closeItems.addEventListener("click", () => {
  modalWindow.style.display = "none";
});

closeButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
});