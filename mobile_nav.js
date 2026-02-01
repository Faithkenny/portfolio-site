'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const leftIcon = document.querySelector(".left-icon");
    
    const hamburgerSvg = document.querySelector(".hamburger-icon");
    const cancelSvg = document.querySelector(".cancel-icon");
    const dropdownMenuWrapper = document.querySelector(".dropdown-menu-wrapper")



leftIcon.addEventListener("click", (e) => {
    e.preventDefault();

   
    leftIcon.style.backgroundColor = "var(--surface-icon-bg)";

if (!hamburgerSvg.classList.contains("hide-icon")) { 
    hamburgerSvg.classList.toggle("hide-icon");
    cancelSvg.classList.toggle("hide-icon");
    dropdownMenuWrapper.style.display = "block";
}else {
    hamburgerSvg.classList.toggle("hide-icon");
    cancelSvg.classList.toggle("hide-icon");
    dropdownMenuWrapper.style.display = "none";
}

});


const rightIcon = document.querySelector(".right-icon");

const daySvg = document.querySelector(".sun-day-icon");
const nightSvg = document.querySelector(".moon-night-icon");

const bodyDarkModeStatus = document.querySelector("body");


rightIcon.addEventListener("click", (e) => {
    e.preventDefault();

    rightIcon.style.backgroundColor = "var(--surface-icon-bg)";

if (bodyDarkModeStatus.classList.contains("dark-mode")){
    daySvg.classList.toggle("hide-icon");
    nightSvg.classList.toggle("hide-icon");
    bodyDarkModeStatus.classList.toggle("dark-mode");
}else {
    daySvg.classList.toggle("hide-icon");
    nightSvg.classList.toggle("hide-icon");
    bodyDarkModeStatus.classList.toggle("dark-mode");
}

});


}
);