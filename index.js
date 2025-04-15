
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            document.body.classList.toggle("sidebar-hidden");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".theme-button i"); // Target the <i> element inside the button
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const isDarkMode = document.body.classList.toggle("dark-mode");
  
            // Toggle the icon classes
            if (isDarkMode) {
                themeButton.classList.remove("fa-moon");
                themeButton.classList.add("fa-sun");
            } else {
                themeButton.classList.remove("fa-sun");
                themeButton.classList.add("fa-moon");
            }
        });
    }
});

// Add event listeners for category buttons
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-button");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");
        });
    });
    
    // Auto-close sidebar when clicking a link on mobile
    const sidebarLinks = document.querySelectorAll(".sidebar .link-item");
    const isMobile = () => window.innerWidth <= 768;
    
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (isMobile()) {
                document.body.classList.add("sidebar-hidden");
            }
        });
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (e) => {
        const sidebar = document.querySelector(".sidebar");
        const menuButton = document.querySelector(".menu-button");
        
        if (isMobile() && 
            !sidebar.contains(e.target) && 
            !menuButton.contains(e.target) && 
            !document.body.classList.contains("sidebar-hidden")) {
            document.body.classList.add("sidebar-hidden");
        }
    });
});
