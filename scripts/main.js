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



gsap.registerPlugin(SplitText);

gsap.set(".item-img", { y: 100 });


ScrollTrigger.batch(".item-img", {
  onEnter: (batch) =>
    gsap.to(batch, {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      stagger: 0.1
    }),
  start: "top center"
});






// accordion


// Time and date display
function updateTimeAndDate() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const dateElem = document.getElementById('date');
  const timeElem = document.getElementById('time');

  if (dateElem) {
    dateElem.textContent = formattedDate;
  }
  if (timeElem) {
    timeElem.textContent = formattedTime;
  }
}


const splitEl = document.getElementById('heading');

gsap.set(splitEl, { opacity: 1 });

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.05
});


// Update the time and date every 30 seconds
setInterval(updateTimeAndDate, 30000);

// Initial call to display the time and date immediately
updateTimeAndDate();