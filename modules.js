

'use strict';

window.addEventListener('DOMContentLoaded', () => {


// This lets user click on the copy email button

    const emailBtn = document.querySelector(".email");

emailBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText("work@iamfaithkenny.com");

  emailBtn.classList.add("is-changing");

  setTimeout(() => {
    emailBtn.textContent = "Copied!";
    emailBtn.classList.remove("is-changing");
  }, 150);

  setTimeout(() => {
    emailBtn.classList.add("is-changing");
    setTimeout(() => {
      emailBtn.textContent = "Copy email";
      emailBtn.classList.remove("is-changing");
    }, 150);
  }, 2000);
});



});
