const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// This allows us to change the accent color dynamically
let accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

function setAccentColor(newColor) {
    accentColor = newColor;
    document.documentElement.style.setProperty('--accent', newColor);
    background.style.borderColor = newColor;
}

const handleEnter = (event) => {
const trigger = event.currentTarget;
trigger.classList.add('trigger-enter');

requestAnimationFrame(() => {
    if (trigger.classList.contains('trigger-enter')) {
    trigger.classList.add('trigger-enter-active');
    }
});

const dropdown = trigger.querySelector('.dropdown');
    if (!dropdown) return;

const dropdownRect = dropdown.getBoundingClientRect();
const navRect = nav.getBoundingClientRect();

    background.classList.add('open');
    background.style.width = `${dropdownRect.width}px`;
    background.style.height = `${dropdownRect.height}px`;
    background.style.transform = `translate(${dropdownRect.left - navRect.left}px, ${dropdownRect.top - navRect.top}px)`;
    background.style.borderColor = accentColor;
};

const handleLeave = (event) => {
const trigger = event.currentTarget;
    trigger.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
};

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', handleEnter);
    trigger.addEventListener('mouseleave', handleLeave);
});