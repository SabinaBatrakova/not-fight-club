const buttonMenu = document.querySelector(".menu-left button");
const buttonHome = document.querySelector(".menu-right .fa-house");
const buttonCharacter = document.querySelector(".menu-right .fa-user");
const buttonSettings = document.querySelector(".menu-right .fa-gear");
const buttonSave = document.querySelector(".button__save-name");
const buttonFight = document.querySelector(".button-fight");


const registrationSection = document.querySelector(".section-registration");
const characterSection = document.querySelector(".section-character");
const gameSection = document.querySelector(".section-game");
const beginGame = document.querySelector(".begin-game")

function hideAllsections() {
    registrationSection.classList.add("hidden");
    characterSection.classList.add("hidden");
    gameSection.classList.add("hidden");
    beginGame.classList.add("hidden");
}

buttonMenu.addEventListener('click', () => {
    hideAllsections();
    registrationSection.classList.remove("hidden");
})

buttonSave.addEventListener('click', () => {
    hideAllsections();
    registrationSection.classList.add("hidden");
    beginGame.classList.remove("hidden");
})

buttonFight.addEventListener('click', () => {
    hideAllsections();
    gameSection.classList.remove("hidden");
})

buttonHome.addEventListener("click", () => {
    hideAllsections();
    gameSection.classList.remove("hidden"); 
});

buttonCharacter.addEventListener("click", () => {
    hideAllsections();
    characterSection.classList.remove("hidden"); 
});

buttonSettings.addEventListener("click", () => {
    hideAllsections();
    registrationSection.classList.remove("hidden");
});