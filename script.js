/* =========================================
   PAYETON GRAPHIC DESIGN PORTFOLIO
   PORTFOLIO FILTER SYSTEM
========================================= */


/*
   STEP 1:
   Get all the filter buttons.

   These are the buttons:
   ALL
   FLYERS
   BRANDING
   SOCIAL MEDIA
   POSTERS
*/
const filterButtons = document.querySelectorAll(".filter-btn");


/*
   STEP 2:
   Get all portfolio projects.

   Each project has the class:
   .portfolio-item
*/
const portfolioItems = document.querySelectorAll(".portfolio-item");


/*
   STEP 3:
   Listen for a click on every filter button.
*/
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        /*
           STEP 4:
           Find out which category
           the visitor selected.

           Example:

           ALL → all
           FLYERS → flyers
           BRANDING → branding
        */
        const selectedCategory = button.getAttribute("data-filter");


        /*
           STEP 5:
           Remove the "active" style
           from every button.
        */
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });


        /*
           STEP 6:
           Make the button that was clicked active.
        */
        button.classList.add("active");


        /*
           STEP 7:
           Check every portfolio project.
        */
        portfolioItems.forEach(function(item) {

            /*
               Find the category of this project.
            */
            const projectCategory =
                item.getAttribute("data-category");


            /*
               STEP 8:
               If the visitor selected ALL,
               show every project.

               Otherwise, only show projects
               belonging to the selected category.
            */
            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/* =========================================
   PORTFOLIO LIGHTBOX
   Opens portfolio images in full-screen view
========================================= */


/*
   Find the lightbox elements
*/
const lightbox = document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


/*
   Find all portfolio images
*/
const portfolioImages =
    document.querySelectorAll(".portfolio-image img");


/*
   Add a click event to every portfolio image
*/
portfolioImages.forEach(function(image) {

    image.addEventListener("click", function() {

        /*
           Put the clicked image's source
           inside the large lightbox image.
        */
        lightboxImage.src = image.src;

        /*
           Display the lightbox.
        */
        lightbox.classList.add("show");

    });

});


/*
   Close the lightbox when the X
   button is clicked.
*/
lightboxClose.addEventListener("click", function() {

    lightbox.classList.remove("show");

});


/*
   Close the lightbox when the visitor
   clicks the dark background.
*/
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


/* =========================================
   MOBILE NAVIGATION
   Opens and closes the navigation menu
   when the hamburger button is clicked.
========================================= */


/* Find the hamburger button */
const menuToggle =
    document.getElementById("menuToggle");


/* Find the navigation */
const navbar =
    document.getElementById("navbar");


/* Listen for a click on the hamburger */
menuToggle.addEventListener("click", function() {

    /*
       Add or remove the "show-menu"
       class from the navigation.
    */
    navbar.classList.toggle("show-menu");

});


/* =========================================
   CLOSE MOBILE MENU AFTER NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show-menu");

    });

});

/* =========================================
   ACTIVE NAVIGATION HIGHLIGHTING

   This automatically highlights the navigation
   link for the section currently visible.
========================================= */


/* Get all sections that have an ID */
const sections = document.querySelectorAll("section[id]");


/* Watch the page while the visitor scrolls */
window.addEventListener("scroll", function() {

    /* Get the current scroll position */
    const scrollPosition = window.scrollY + 150;


    /* Check every section */
    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        /*
           Check whether the visitor is currently
           inside this section.
        */
        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            /* Remove active from all links */
            navLinks.forEach(function(link) {

                link.classList.remove("active");

            });


            /* Find the link for this section */
            const activeLink =
                document.querySelector(
                    '.navbar a[href="#' + sectionId + '"]'
                );


            /* Highlight that link */
            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});

/* =========================================
   SCROLL TO TOP FUNCTION
========================================= */


/* Find the scroll-to-top button */
const scrollTopButton =
    document.getElementById("scrollTop");


/* Watch the page while scrolling */
window.addEventListener("scroll", function() {

    /*
       Show the button after the visitor
       scrolls down 500 pixels.
    */
    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


/* Scroll back to the top when clicked */
scrollTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================================
   SCROLL TO TOP FUNCTION
========================================= */


/* Find the scroll-to-top button */
const scrollTopButton =
    document.getElementById("scrollTop");


/* Watch the page while scrolling */
window.addEventListener("scroll", function() {

    /*
       Show the button after the visitor
       scrolls down 500 pixels.
    */
    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


/* Scroll back to the top when clicked */
scrollTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================================
   SCROLL REVEAL ANIMATION

   This watches elements and reveals them when
   they become visible on the screen.
========================================= */


/* Select the elements we want to animate */
const revealElements =
    document.querySelectorAll(
        ".about, .skills, .services, .portfolio, .contact"
    );


/* Add the reveal class to each element */
revealElements.forEach(function(element) {

    element.classList.add("reveal");

});


/* Function that checks which elements are visible */
function revealOnScroll() {

    revealElements.forEach(function(element) {

        /* Get the element's position */
        const elementTop =
            element.getBoundingClientRect().top;


        /*
           If the element is approximately inside
           the visitor's screen, reveal it.
        */
        if (elementTop < window.innerHeight - 100) {

            element.classList.add("active");

        }

    });

}


/* Run the function when the page scrolls */
window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Run it once when the page first loads */
revealOnScroll();

/* =========================================
   CONTACT FORM VALIDATION

   This checks the visitor's information
   before the form is submitted.
========================================= */


/* Find the contact form */
const contactForm =
    document.getElementById("contactForm");


/* Find the message area */
const formMessage =
    document.getElementById("formMessage");


/*
   Listen for the form submission.
*/
contactForm.addEventListener("submit", function(event) {

    /*
       Stop the browser from submitting the
       form immediately.

       We want JavaScript to check it first.
    */
    event.preventDefault();


    /* Get the visitor's information */
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const project =
        document.getElementById("project").value;

    const message =
        document.getElementById("message").value.trim();


    /*
       Remove any previous message styles.
    */
    formMessage.classList.remove(
        "success",
        "error"
    );


    /*
       Check the visitor's name.
    */
    if (name === "") {

        formMessage.textContent =
            "Please enter your name.";

        formMessage.classList.add("error");

        return;
    }


    /*
       Check the email address.

       This is a simple email pattern.
    */
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.classList.add("error");

        return;
    }


    /*
       Check whether the visitor selected
       a project type.
    */
    if (project === "") {

        formMessage.textContent =
            "Please select a project type.";

        formMessage.classList.add("error");

        return;
    }


    /*
       Check the project message.
    */
    if (message === "") {

        formMessage.textContent =
            "Please tell us about your project.";

        formMessage.classList.add("error");

        return;
    }


    /*
       If all checks pass, show a success
       message.
    */
    formMessage.textContent =
        "Thank you! Your project information is ready to be sent.";

    formMessage.classList.add("success");


    /*
       Clear the form after successful validation.
    */
    contactForm.reset();

});