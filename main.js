// --- Typing effect for role ---
const texts = [
  "Engineering Student | Aspiring Software Engineer"
];

let textIndex = 0;
let charIndexText = 0;
let isDeletingText = false;

const textEl = document.getElementById("typing-text");

function typeEffect() {
  let current = texts[textIndex];

  if (isDeletingText) {
    charIndexText--;
  } else {
    charIndexText++;
  }

  textEl.textContent = current.substring(0, charIndexText);

  let speed = isDeletingText ? 40 : 80;

  if (!isDeletingText && charIndexText === current.length) {
    speed = 1500; // pause at end
    isDeletingText = true;
  } else if (isDeletingText && charIndexText === 0) {
    isDeletingText = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// --- Typing effect for name ---
const name = "Fahmida Faiza";

let i = 0;
let isDeletingName = false;

const nameEl = document.getElementById("name-text");

function typeName() {
  if (isDeletingName) {
    i--;
  } else {
    i++;
  }

  nameEl.textContent = name.substring(0, i);

  let speed = isDeletingName ? 60 : 120;

  if (!isDeletingName && i === name.length) {
    speed = 1500; // pause at end
    isDeletingName = true;
  } else if (isDeletingName && i === 0) {
    isDeletingName = false;
    speed = 400;
  }

  setTimeout(typeName, speed);
}

typeName();

function switchTab(btn, id) {
  document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.skills-content').forEach(c => c.classList.remove('active'));

  btn.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-msg').style.display = 'block';
  e.target.reset();
}

const obs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) cur = s.id;
  });

  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--accent)' : '';
  });
});