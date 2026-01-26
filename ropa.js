'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const leftIcon = document.querySelector(".left-icon");
    
    const hamburgerSvg = document.querySelector(".cancel-icon");
    const cancelSvg = document.querySelector(".hamburger-icon");
    const dropdownMenuWrapper = document.querySelector(".dropdown-menu-wrapper")



leftIcon.addEventListener("click", (e) => {
    e.preventDefault();

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


}
);