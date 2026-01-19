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


  
// This function pauses the motion in the background when the modal is in focus
  const stopBgMovement = function() {
    const x = document.querySelectorAll(".work div video");
    x.forEach(item => { 
      item.removeAttribute("loop");
    });
  }

// This function returns the loop attribute once the modal is canceled
  const resumeBgMovement = function() {
    const x = document.querySelectorAll(".work > div video");
    x.forEach(item => { 
      item.setAttribute("loop");
    });
  }


  const allWorkItems = document.querySelectorAll(".work");
  const closeBtn = document.querySelector(".closeButton");
  const overlay = document.querySelector(".overlay");




// This makes sure anytime any work item's modal is opened, the loop feature stops
allWorkItems.forEach(item => {
    item.addEventListener("click", (e) => {
    e.preventDefault();
    
    stopBgMovement();
  })
});

// This makes sure anytime any work item's modal is dismissed, the loop feature stops
closeBtn.forEach(item => {
    item.addEventListener("click", (e) => {
    e.preventDefault();
    
    resumeBgMovement();
  })
});

    // Individual work item
  const vanitylvrs = document.querySelector(".vanitylvrs");
  const vanitylvrsModal = document.querySelector(".vanitylvrsModal");
  const vanitylvrsCloseBtn = document.querySelector(".vanitylvrsModal .btn");

  
  vanitylvrs.addEventListener("click", (evt) => {
    evt.preventDefault();
    stopBgMovement();
    overlay.style.display = "flex";
    vanitylvrsModal.style.display = "flex";
  });
  
   vanitylvrsCloseBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    resumeBgMovementBgMovement();
    overlay.style.display = "none";
    vanitylvrsModal.style.display = "none";
  }); 





});


        