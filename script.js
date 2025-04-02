// 📩 Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulating form submission (Replace with actual backend request)
        alert(`Thanks, ${name}! Your message has been received.`);

        // Clear form
        document.getElementById("contact-form").reset();
    });

    // 🎯 Category Filtering for Projects
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            projects.forEach(project => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
function searchProjects() {
    let input = document.getElementById("search-bar").value.toLowerCase().trim();
    let projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        let title = project.querySelector("h3").textContent.toLowerCase();
        let description = project.querySelector("p").textContent.toLowerCase();

        // Show/hide projects based on search input
        if (title.includes(input) || description.includes(input)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
// Show or Hide the Back-to-Top Button with Animation
window.onscroll = function () {
    let button = document.getElementById("back-to-top");
    if (document.documentElement.scrollTop > 300) {
        button.classList.add("show");
        button.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
        button.classList.remove("show");
    }
};

// Scroll to Top Function (Smooth Scrolling)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// Back to Top Button Logic
const backToTopButton = document.getElementById("back-to-top");

// Show button when user scrolls down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show"); // Show button
    } else {
        backToTopButton.classList.remove("show"); // Hide button
    }
});

// Scroll smoothly to top when the button is clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
});
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Wait for the page to fully load
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    
    // Add fade-out effect
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500); // Adjust time if needed (500ms = 0.5s)
});




