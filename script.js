'use strict';

window.addEventListener('DOMContentLoaded', () => {
  
  // add width - 184 to every thumbnail

  const images = document.querySelectorAll("div img");
  const videos = document.querySelectorAll("div video");

  images.forEach(item => {
    item.setAttribute("width", 380);
  });

  videos.forEach(item => {
    item.setAttribute("width", 380);
  });
  

  // This didn't work. I was trying an hover effect
  const imgSwap = document.querySelector(".trial");
  window.addEventListener('mouseenter', (e) => {
    imgSwap.removeAttribute("src", "media/ROPA-for-the-new-website.png" )
  });

});


        