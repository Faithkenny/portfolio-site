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
  

  const section = document.querySelectorAll(".case-study");
  // const dialog = document.querySelector(".dialog");
  const dialog = document.querySelector(".ThreeUpMediaTile_modalContainer__RSFmK");
  // const closeBtn = document.querySelector(".dialog button");
  const closeBtn = document.querySelector(".ThreeUpMediaTile_closeButton__FX7yd");
  
  section.forEach(item => {
    item.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.style.display = "flex";

  })
});

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.style.display = "none";
  });
  


  // This didn't work. I was trying an hover effect
  const imgSwap = document.querySelector(".trial");
  window.addEventListener('mouseenter', (e) => {
    imgSwap.removeAttribute("src", "media/ROPA-for-the-new-website.png" )
  });

});


        