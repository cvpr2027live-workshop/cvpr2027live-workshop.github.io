'use strict';
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  links.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  links.classList.toggle('open', open);
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
