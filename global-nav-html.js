document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-header-and-dropdownmenu");
  if (!placeholder) return;

  fetch("global-nav.html")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load nav");
      return response.text();
    })
    .then(html => {
      const template = document.createElement("template");
      template.innerHTML = html.trim();

      const root = template.content.getElementById("global-nav-root");
      if (root) {
        placeholder.replaceWith(root);
      } else {
        placeholder.replaceWith(...template.content.childNodes);
      }

      if (typeof initGlobalNav === "function") {
        initGlobalNav();
      }
    })
    .catch(err => {
      console.error("Navigation load error:", err);
    });
});