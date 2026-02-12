

'use strict';

window.addEventListener('DOMContentLoaded', () => {


  

// if (window.innerWidth <= 796){
//   document.querySelectorAll(".desktop").forEach(item => item.remove());


// }


  // const emailBtn = document.querySelector(".email");

  // Use the Clipboard API to write the text
  // emailBtn.addEventListener("click", (e) => {
  //   navigator.clipboard.writeText("heyfaith@iamfaithkenny.com");
  //   emailBtn.textContent = "Copied!"
  // });


window.addEventListener('resize', function(event) {
  // Code to run when the window is resized
  console.log('Window resized to: ' + window.innerWidth + 'px width and ' + window.innerHeight + 'px height');
  // You can perform actions here, such as updating layout or recalculating dimensions. {} This is for learning purposes 
});




  
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

//   const designChallenge = document.querySelector(".designChallenge");
//   const designChallengeModal = document.querySelector(".designChallengeModal");
//   const designChallengeModalCloseBtn = document.querySelector(".designChallengeModal .closeButton");

//   const okfn = document.querySelector(".okfn");
//   const okfnModal = document.querySelector(".okfnModal");
//   const okfnVideo = document.querySelector(".okfnModal video");
//   const okfnModalCloseBtn = document.querySelector(".okfnModal .closeButton");

//   const vanitylvrs = document.querySelector(".vanitylvrs");
//   const vanitylvrsModal = document.querySelector(".vanitylvrsModal");
//   const vanitylvrsModalVideo = document.querySelector(".vanitylvrsModal video");
//   const vanitylvrsModalCloseBtn = document.querySelector(".vanitylvrsModal .closeButton");

//   const wallpapers = document.querySelector(".wallpapers");
//   const wallpapersModal = document.querySelector(".wallpapersModal");
//   const wallpapersModalVideo = document.querySelector(".wallpapersModal video");
//   const wallpapersModalCloseBtn = document.querySelector(".wallpapersModal .closeButton");

//   const qacehomes = document.querySelector(".qacehomes");
//   const qacehomesModal = document.querySelector(".qacehomesModal");
//   const qacehomesModalVideo = document.querySelector(".qacehomesModal video");
//   const qacehomesModalCloseBtn = document.querySelector(".qacehomesModal .closeButton");

  
// okfn.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector(".okfnModal .modalContent_buttonWrapper").style.width = "auto";
//       document.querySelector(".okfnModal .mediaWrapper").style.maxHeight = "56vh";
//   okfnVideo.setAttribute("autoplay", "true");
//   okfnModal.style.display = "flex";
//   overlay.style.display = "flex";
// });

// okfnModalCloseBtn.addEventListener("click", (e) => {
//   okfnModal.style.display = "none";
//   overlay.style.display = "none";
// });

  



// vanitylvrs.addEventListener("click", (e) => {
//   e.preventDefault();
//   vanitylvrsModalVideo.setAttribute("autoplay", "true");
//   vanitylvrsModal.style.display = "flex";
//   overlay.style.display = "flex";
// });

// vanitylvrsModalCloseBtn.addEventListener("click", (e) => {
//   vanitylvrsModal.style.display = "none";
//   overlay.style.display = "none";
// });


// wallpapers.addEventListener("click", (e) => {
//   e.preventDefault();
//   wallpapersModalVideo.setAttribute("autoplay", "true");
//   wallpapersModal.style.display = "flex";
//   overlay.style.display = "flex";
// });

// wallpapersModalCloseBtn.addEventListener("click", (e) => {
//   wallpapersModal.style.display = "none";
//   overlay.style.display = "none";
// });



// qacehomes.addEventListener("click", (e) => {
//   e.preventDefault();
//   qacehomesModalVideo.setAttribute("autoplay", "true");
//   qacehomesModal.style.display = "flex";
//   overlay.style.display = "flex";
// });

// qacehomesModalCloseBtn.addEventListener("click", (e) => {
//   qacehomesModal.style.display = "none";
//   overlay.style.display = "none";
// });


// designChallenge.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector(".modalContent_buttonWrapper").style.width = "auto";
//     document.querySelector(".mediaWrapper").style.maxHeight = "56vh";
//   designChallengeModal.style.display = "flex";
//   overlay.style.display = "flex";
// });

// designChallengeModalCloseBtn.addEventListener("click", (e) => {
//   designChallengeModal.style.display = "none";
//   overlay.style.display = "none";
// });




  
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


        