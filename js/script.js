"use strict"

const liExplore = document.querySelector(".nav-item-explore");
const liPlaces = document.querySelector(".nav-item-places");

const exploreModal = document.querySelector(".explore");
const placesModal = document.querySelector(".places");


liExplore.addEventListener("click", function(){
    placesModal.classList.add("hidden");
    exploreModal.classList.toggle("hidden");
})

liPlaces.addEventListener("click", function(){
    exploreModal.classList.add("hidden");
    placesModal.classList.toggle("hidden");
})