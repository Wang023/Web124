// Gana Sehaki 07/05/2025
const nav = document.getElementById('navbar');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

//Highlight the current nav link 
const sections  = document.querySelectorAll('main > section');      // all the sections
const navLinks  = document.querySelectorAll('#navbar .nav-link');   // every link in the bar
const navHeight = nav.offsetHeight;                                // reuse the same nav element we already selected

function highlightNav() {
  const scrollPos = window.scrollY + navHeight + 1; // +1 so we switch the moment the title crosses under the bar

  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      // activate the link that matches this section
      navLinks.forEach(link => link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${section.id}`
      ));
    }
  });
}

// fire once on load and on scroll
highlightNav();
window.addEventListener('scroll', highlightNav);
