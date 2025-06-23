// Gana Sehaki 06/22/2025
// Select only navigation links for highlight behavior
const navLinks = document.querySelectorAll('.nav-link');

// Create the highlight element (a span styled with CSS)
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

// Function to move highlight under hovered or focused nav link
function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
    };

    // Apply size and position to the highlight
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Listen to hover and keyboard focus events
navLinks.forEach(link => {
    link.addEventListener('mouseenter', highlightLink);
    link.addEventListener('focus', highlightLink); // Support keyboard nav
});


 

// Dark mode
const toggleBtn = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Switch between moon and sun icons
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  } else {
    icon.classList.replace("bi-sun-fill", "bi-moon-fill");
  }
});

