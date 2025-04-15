
document.addEventListener("DOMContentLoaded", () => {
    const menubar = document.querySelector(".menu-button");
    if (menubar) {
        menubar.addEventListener("click", () => {
            const menu = document.querySelector(".menu");
            document.body.classList.toggle("sidebar-hidden"); // Removed the dot
        });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const themebutton = document.querySelector(".theme-button i"); // Target the <i> element inside the button
    if (themebutton) {
        themebutton.addEventListener("click", () => {
            const isDarkMode = document.body.classList.toggle("dark-mode");
  
            // Toggle the icon classes
            if (isDarkMode) {
                themebutton.classList.remove("fa-moon");
                themebutton.classList.add("fa-sun");
            } else {
                themebutton.classList.remove("fa-sun");
                themebutton.classList.add("fa-moon");
            }
  
            console.log("Dark mode:", isDarkMode); // Debugging
        });
    }
  });
