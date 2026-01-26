'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const hamburgerSvg = document.querySelector(".cancel-icon");
    const cancelSvg = document.querySelector(".hamburger-icon");
    const dropdownMenuWrapper = document.querySelector("")




hamburgerSvg.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerSvg.classList.toggle(".hide-icon");
    cancelSvg.classList.toggle(".hide-icon");

});


}
);