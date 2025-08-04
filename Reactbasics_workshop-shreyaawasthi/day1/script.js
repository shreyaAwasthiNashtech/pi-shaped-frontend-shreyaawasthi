// Modal for About
const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const closeAbout = document.getElementById('close-about');

aboutBtn.addEventListener('click', () => {
  aboutModal.classList.remove('hidden');
});
closeAbout.addEventListener('click', () => {
  aboutModal.classList.add('hidden');
});
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") aboutModal.classList.add('hidden');
});
aboutModal.addEventListener('click', (e) => {
  if (e.target === aboutModal) aboutModal.classList.add('hidden');
});

// Mode toggle (light/dark modes)
const modeBtn = document.getElementById('toggleMode');
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
  modeBtn.textContent = document.body.classList.contains('night-mode') ? '🌙' : '☀️';
});

// Experience calculation
const expBtn = document.getElementById('calcExpBtn');
const expResult = document.getElementById('expResult');
if (expBtn) {
  expBtn.addEventListener('click', () => {
    const year = document.getElementById('startYear').value;
    const thisYear = new Date().getFullYear();
    if (!year || year > thisYear || year < 1980) {
      expResult.textContent = 'Please enter a valid start year (after 1980).';
      expResult.style.color = "#ce2246";
      return;
    }
    const years = thisYear - parseInt(year,10);
    expResult.textContent = `You have ${years} years of coding experience.`;
    expResult.style.color = "#09845e";
  });
}

// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
  const formMessage = document.getElementById('formMessage');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    let errors = [];
    if(!name) errors.push("Name is required.");
    if(!email) errors.push("Email is required.");
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Invalid email.");
    if(errors.length) {
      formMessage.textContent = errors.join(" ");
      formMessage.style.color = "#ce2246";
      return;
    }
    formMessage.textContent = "Message sent! Thank you.";
    formMessage.style.color = "#09845e";
    form.reset();
    setTimeout(() => { formMessage.textContent = ""; }, 3500);
  });
}

// Dynamic Projects Rendering
const projects = [
  {
    title: "Smart Home Automation",
    desc: "IoT-based platform to control and automate home devices using a central dashboard.",
    link: "#"
  },
  {
    title: "RESTful Blog API",
    desc: "Spring Boot application for a scalable blogging system with robust API endpoints.",
    link: "#"
  },
  {
    title: "Test Automation Dashboard",
    desc: "Real-time dashboard for QA analytics integrating Selenium and Appium test results.",
    link: "#"
  }
];

const renderProjects = () => {
  const list = document.getElementById('project-list');
  list.innerHTML = projects.map(p =>
    `<div class="project-card">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <a href="${p.link}" target="_blank" class="project-link">View Project</a>
    </div>`
  ).join('');
};
renderProjects();
