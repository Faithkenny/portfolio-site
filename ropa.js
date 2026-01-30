'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const leftIcon = document.querySelector(".left-icon");
    
    const hamburgerSvg = document.querySelector(".cancel-icon");
    const cancelSvg = document.querySelector(".hamburger-icon");
    const dropdownMenuWrapper = document.querySelector(".dropdown-menu-wrapper")



leftIcon.addEventListener("click", (e) => {
    e.preventDefault();

    leftIcon.style.background = "var(--cool-gray-100)";

if (hamburgerSvg.classList.contains("hide-icon")) { 
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


rightIcon.addEventListener("click", (e) => {
    e.preventDefault();

    rightIcon.style.background = "var(--cool-gray-100)";

});


}
);