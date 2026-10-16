'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  nav?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
const search = document.querySelector('#project-search');
const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('#project-grid .project-card')];
let category = 'all';
function updateProjects() {
  const term = (search?.value || '').trim().toLowerCase();
  let count = 0;
  for (const card of cards) {
    const show = (category === 'all' || card.dataset.category === category)
      && card.textContent.toLowerCase().includes(term);
    card.hidden = !show;
    if (show) count++;
  }
  const status = document.querySelector('.result-count');
  if (status) status.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  const empty = document.querySelector('.empty-state');
  if (empty) empty.hidden = count !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  updateProjects();
}));
search?.addEventListener('input', updateProjects);
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = String(new Date().getFullYear());
});
