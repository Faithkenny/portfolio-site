const emailBtns = document.querySelectorAll(".email");

emailBtns.forEach((emailBtn) => {
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


