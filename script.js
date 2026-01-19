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
  const toggleLoop = function() {
    const x = document.querySelectorAll(".work > div video");
    x.forEach(item => { 
      item.toggleAttribute("loop");
    });
  }


  const section = document.querySelectorAll(".work");
  // const dialog = document.querySelector(".dialog");
  const dialog = document.querySelector(".modal");
  // const closeBtn = document.querySelector(".dialog button");
  // const closeBtn = document.querySelectorAll(".closeButton");
  const overlay = document.querySelector(".overlay");



  // Each work item
  const vanitylvrs = document.querySelector(".vanitylvrs");
  const vanitylvrsModal = document.querySelector(".vanitylvrsModal");
  const vanitylvrsModalVideo = document.querySelector(".vanitylvrsModal video");
  const vanitylvrsModalCloseBtn = document.querySelector(".vanitylvrsModal .closeButton");

  const wallpapers = document.querySelector(".wallpapers");
  const wallpapersModal = document.querySelector(".wallpapersModal");
  const wallpapersModalVideo = document.querySelector(".wallpapersModal video");
  const wallpapersModalCloseBtn = document.querySelector(".wallpapersModal .closeButton");

  const photographyWebsite = document.querySelector(".photographyWebsite");
  const photographyWebsiteModal = document.querySelector(".photographyWebsiteModal");
  const photographyWebsiteModalVideo = document.querySelector(".photographyWebsiteModal video");
  const photographyWebsiteModalCloseBtn = document.querySelector(".photographyWebsiteModal .closeButton");

  const qacehomes = document.querySelector(".qacehomes");
  const qacehomesModal = document.querySelector(".qacehomesModal");
  const qacehomesModalVideo = document.querySelector(".qacehomesModal video");
  const qacehomesModalCloseBtn = document.querySelector(".qacehomesModal .closeButton");


vanitylvrs.addEventListener("click", (e) => {
  e.preventDefault();
  vanitylvrsModalVideo.setAttribute("autoplay", "true");
  vanitylvrsModal.style.display = "flex";
  overlay.style.display = "flex";
});

vanitylvrsModalCloseBtn.addEventListener("click", (e) => {
  vanitylvrsModal.style.display = "none";
  overlay.style.display = "none";
});


wallpapers.addEventListener("click", (e) => {
  e.preventDefault();
  wallpapersModalVideo.setAttribute("autoplay", "true");
  wallpapersModal.style.display = "flex";
  overlay.style.display = "flex";
});

wallpapersModalCloseBtn.addEventListener("click", (e) => {
  wallpapersModal.style.display = "none";
  overlay.style.display = "none";
});


photographyWebsite.addEventListener("click", (e) => {
  e.preventDefault();
  photographyWebsiteModalVideo.setAttribute("autoplay", "true");
  photographyWebsiteModal.style.display = "flex";
  overlay.style.display = "flex";
});

photographyWebsiteModalCloseBtn.addEventListener("click", (e) => {
  photographyWebsiteModal.style.display = "none";
  overlay.style.display = "none";
});


qacehomes.addEventListener("click", (e) => {
  e.preventDefault();
  qacehomesModalVideo.setAttribute("autoplay", "true");
  qacehomesModal.style.display = "flex";
  overlay.style.display = "flex";
});

qacehomesModalCloseBtn.addEventListener("click", (e) => {
  qacehomesModal.style.display = "none";
  overlay.style.display = "none";
});




  
//   section.forEach(item => {
//     item.addEventListener("click", (e) => {
//     e.preventDefault();

//     stopBgMovement.forEach(video => video.removeAttribute("loop"));
//     dialog.style.display = "flex";
//     overlay.style.display = "flex";
//   })

//     closeBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     dialog.style.display = "none";
//     overlay.style.display = "none";
//   });
  

//     overlay.addEventListener("click", (e) => {
//     e.preventDefault();

//     dialog.style.display = "none";
//     overlay.style.display = "none";
//   });
// });




});


        