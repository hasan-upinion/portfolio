'use strict';

const menuButton = document.querySelector('.menuButton');
const menu = document.querySelector('.menu');
const skillsEl = document.querySelector('.skills');
const projectsEl = document.querySelector('.projects');
const contactForm = document.querySelector('#contact-form');
const modal = document.querySelector('#modal');

menuButton.addEventListener('click', toggleMenu);
document.body.addEventListener('click', hideMenu);
window.addEventListener('load', populateHtml);
contactForm.addEventListener('submit', onContactSubmit);
document.addEventListener('scroll', e => {
  const body = document.body,
    html = document.documentElement;

  const fullHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const scrolledDown = html.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrolledDown + clientHeight > fullHeight - 70) {
    menuButton.classList.add('hide');
  } else if (menuButton.classList.contains('hide')) {
    menuButton.classList.remove('hide');
  }
});

function toggleMenu(e) {
  e.stopPropagation();
  menuButton.classList.toggle('clicked');
  if (menu.classList.contains('show')) {
    menu.classList.add('hide');
    menu.classList.remove('show');
  } else {
    menu.classList.remove('hide');
    menu.classList.add('show');
  }
}

function hideMenu() {
  if (menu.classList.contains('show')) {
    menuButton.classList.remove('clicked');
    menu.classList.add('hide');
    menu.classList.remove('show');
  }
}

function onContactSubmit(e) {
  let name = e.target[0].value;
  let email = e.target[1].value;
  let message = e.target[2].value;
  e.target.action = `mailto:hasansoso343@gmail.com?subject=Hi Hasan!&body=Hi this is ${name},%0D%0A%0D%0A${message}`;
  const success = document.querySelector('#success');
  success.classList.add('show');
}

function openModal(url) {
  const project = projects.find(project => project.url === url);
  modal.style.display = 'flex';
  modal.classList.add('show');
  const header = modal.querySelector('.modalHeader');
  const body = modal.querySelector('.modalBody');
  const footer = modal.querySelector('.modalFooter');

  const img = `
    <img src="${
      project.src ? project.src : './assets/noImage.png'
    }" class="modalHeaderImage" >
  `;
  const projectName = `<h2 class="modalHeaderText">${project.name}</h2>`;
  const position = `
    <p data-title='Position' class="position">${project.position}</p>
  `;
  console.log(project.url);

  const link = `<a  href="${
    project.url
  }" target="_blank" class="link">See website</a>`;

  body.innerHTML = `
    ${img} 
    ${link}
  `;
  header.innerHTML = `${projectName} `;
  footer.innerHTML = `
  <p data-title='Description'>${
    project.description
  }</p> ${position} <button class="closeModal">Close</button>`;
  footer.querySelector('.closeModal').addEventListener('click', closeModal);

  modal.addEventListener('click', handleModalClick);
}

function handleModalClick(e) {
  if (e.target.id === 'modal') {
    closeModal();
  }
}

function closeModal() {
  const hide = setTimeout(() => {
    modal.style.display = 'none';
    clearTimeout(hide);
  }, 400);
  modal.classList.remove('show');
  modal.removeEventListener('click', handleModalClick);
}

function populateHtml() {
  let skillsHtml = '';
  for (const skill of skills) {
    const html = `
    <div class="skillTitle" aria-title="My Skill Title">${skill.title}</div>
    <div class="percentage" aria-percentage="My Skill Percentage">
    <span class="skillPercentageIndicator" style="width: ${
      skill.percentage
    }%;"></span>
    <span class="skillPercentage">${skill.percentage}%</span>
                    </div>
                    `;
    skillsHtml += html;
  }
  skillsEl.setAttribute('aria-skills-list', 'This is my skills list');
  skillsEl.innerHTML = skillsHtml;

  let projectsHtml = '';
  for (const project of projects) {
    const html = `
  <a class="project animated fade-in" aria-projects="My Projects" onclick="openModal('${
    project.url
  }')">
  <img class="projectImg ${!project.src ? 'noImage' : ''}" src="${
      project.src ? project.src : './assets/noImage.png'
    }" alt="${project.name} Photo" >
  <h3 class="projectTitle" aria-name="This is ${project.name}" >${
      project.name
    }</h3>
  <button class="learnMore" aria-info="Click to read more"  id="${
    project.url
  }" onclick="openModal(this.id)">Read More!</button>
  </a>
  `;
    projectsHtml += html;
  }

  projectsEl.setAttribute('aria-projects', 'This is my projects');
  projectsEl.innerHTML = projectsHtml;
}
