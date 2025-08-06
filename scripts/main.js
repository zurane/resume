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
function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Minus icon
  const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 text-stone-500">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;

  // SVG for Plus icon
  const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 text-stone-500">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = plusSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = minusSVG;
  }
}

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
    timeElem.textContent = formattedTime + ' — ' + 'SAST';
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


// Update the time and date every minute
setInterval(updateTimeAndDate, 500);

// Initial call to display the time and date immediately
updateTimeAndDate();