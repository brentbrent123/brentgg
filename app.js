const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navItem = document.querySelectorAll(".nav__item"),
    header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
        }
        changeIcon();
    });
});

// Change nav toggle icon
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

// Downloading Resume
// document.getElementsByClassName("btn btn--primary").addEventListener("click", function() {
//   window.location.href = "../../assets/Calvin Mwangi.pdf"
// })


// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        520: {
            slidesPerView: "auto",
        },
    },
});

// header scroll animation
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("header--scroll");
    } else {
        header.classList.remove("header--scroll");
    }
});

// ScrollReveal animations
const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 400,
    reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
    ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content", {
        delay: 500,
        interval: 100,
    }
);

sr.reveal(".qualification__footer-text, .contact__content", {
    origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

// Get elements for the "Know More" modal
const knowMoreBtn = document.getElementById("know-more-btn");
const modal = document.getElementById("experience-modal");
const closeModalBtn = document.getElementById("modal-close-btn");

// Show modal when "Know More" is clicked
knowMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

// Close modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Get elements for the fullscreen image modal
const modalImages = document.querySelectorAll(".modal__image-item");
const imageViewer = document.getElementById("image-viewer");
const imageViewerImg = document.getElementById("image-viewer-img");
const imageCloseBtn = document.getElementById("image-close-btn");

// Open the fullscreen image modal when an image is clicked
modalImages.forEach((img) => {
    img.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the parent modal close event
        imageViewer.style.display = "flex"; // Show the fullscreen modal
        imageViewerImg.src = img.src; // Set the clicked image as the modal's image
    });
});

// Close the fullscreen image modal
imageCloseBtn.addEventListener("click", () => {
    imageViewer.style.display = "none"; // Hide the fullscreen modal
});

// Close the fullscreen image modal when clicking outside the image
imageViewer.addEventListener("click", (e) => {
    if (e.target !== imageViewerImg) {
        imageViewer.style.display = "none";
    }
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Number of particles
            density: {
                enable: true,
                value_area: 800, // Controls particle spread
            },
        },
        color: {
            value: "#ffffff", // Particle color
        },
        shape: {
            type: "circle", // Particle shape (circle, edge, triangle, etc.)
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.5, // Opacity of particles
            random: false,
        },
        size: {
            value: 1, // Size of particles
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150, // Distance for linking particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1, // Speed of particle movement
            direction: "none", // Direction of movement
            random: false,
            straight: false,
            out_mode: "out", // Behavior when particles move out of canvas
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Interaction on hover (grab, bubble, repulse, etc.)
            },
            onclick: {
                enable: true,
                mode: "push", // Interaction on click (push, remove, bubble, etc.)
            },
        },
        modes: {
            repulse: {
                distance: 100, // Repulsion distance
            },
            push: {
                particles_nb: 4, // Number of particles pushed on click
            },
        },
    },
    retina_detect: true, // Adjust for high-DPI screens
});

// Modal functionality
document.querySelectorAll(".project__link").forEach((button) => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector(".modal__close");

    // Open modal
    button.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Enlarge image on click
document.querySelectorAll(".modal__image").forEach((image) => {
    image.addEventListener("click", () => {
        const viewer = document.createElement("div");
        viewer.classList.add("image-viewer");
        viewer.innerHTML = `
            <span class="viewer__close">&times;</span>
            <img src="${image.src}" alt="${image.alt}" class="viewer__img">
        `;
        document.body.appendChild(viewer);

        // Close viewer
        viewer.querySelector(".viewer__close").addEventListener("click", () => {
            document.body.removeChild(viewer);
        });
    });
});