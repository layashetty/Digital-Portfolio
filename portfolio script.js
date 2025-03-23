document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Update greeting text format
    const greetingText = document.getElementById("greeting");
    greetingText.innerHTML = "Hi, I'm";
    
    const nameText = document.getElementById("name");
    nameText.innerHTML = "Lakshmi S R";
    
    // Ensure degree text matches greeting font size
    const degreeText = document.getElementById("degree");
    if (degreeText) {
        degreeText.style.fontSize = window.getComputedStyle(greetingText).fontSize;
    }

    // Apply animation to curved sections when scrolled into view
    const curvedSections = document.querySelectorAll(".curved-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scale(1)";
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.5 });

    curvedSections.forEach(section => {
        section.style.transform = "scale(0.8)";
        section.style.opacity = "0";
        section.style.transition = "all 0.5s ease-in-out";
        observer.observe(section);
    });

    // Resume download button functionality
    const resumeButton = document.getElementById("resume-download");
    resumeButton.addEventListener("click", function() {
        window.location.href = "resume.pdf"; // Replace with actual resume file path
    });

    // Contact section alignment adjustments
    const contactContainer = document.querySelector(".contact-container");
    if (contactContainer) {
        contactContainer.style.display = "flex";
        contactContainer.style.justifyContent = "space-between";
    }
});
