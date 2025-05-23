$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});



// Sticky element entrance animation
gsap.to(".box", {
  duration: 1.5,
  x: 5,
  ease: "power3.out",
});

// GSAP Animation link hover effect (work.html)
const texts = document.querySelectorAll(".hover-text");
texts.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    gsap.to(text, {
      scale: 1.2,
      textShadow: "0px 0px 15px #4ade80",
      color: "#4ade80",
      duration: 0.2,
    });
  });

  text.addEventListener("mouseleave", () => {
    gsap.to(text, {
      scale: 1,
      textShadow: "0px 0px 0px transparent",
      color: "#FFFFFF",
      duration: 0.3,
    });
  });
});

