document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("nav-header-and-dropdownmenu");
    if (!placeholder) return;
  
    fetch("global-nav.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load nav");
        }
        return response.text();
      })
      .then(html => {
        // Parse the HTML string into real nodes
        const template = document.createElement("template");
        template.innerHTML = html.trim();
  
        // Insert nav nodes before the placeholder
        placeholder.replaceWith(...template.content.childNodes);
      })
      .catch(err => {
        console.error("Navigation load error:", err);
      });
  });