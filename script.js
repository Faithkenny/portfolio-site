'use strict';

window.addEventListener('DOMContentLoaded', () => {
  
;
  // add width - 184 to every thumbnail

  const images = document.querySelectorAll("div img");
  const videos = document.querySelectorAll("div video");

  images.forEach(item => {
    item.setAttribute("width", 380);
  });

  videos.forEach(item => {
    item.setAttribute("width", 380);
  });
  

  const section = document.querySelectorAll(".work");
  // const dialog = document.querySelector(".dialog");
  const dialog = document.querySelector(".modal");
  // const closeBtn = document.querySelector(".dialog button");
  const closeBtn = document.querySelector(".closeButton");
  const overlay = document.querySelector(".overlay");


  
  section.forEach(item => {
    item.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.style.display = "flex";
    overlay.style.display = "flex";
  })

    closeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.style.display = "none";
    overlay.style.display = "none";
  });
  

    overlay.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.style.display = "none";
    overlay.style.display = "none";
  });
});




});


        