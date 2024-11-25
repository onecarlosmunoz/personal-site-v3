import { addObserver } from './observer.js';

export function initializePreloader() {
  document.body.classList.add('preloader');
  document.documentElement.classList.add('prevent-scroll');
  window.addEventListener("load", showPage);
}

function showPage() {
  addObserver();
  document.body.classList.remove('preloader');
  document.documentElement.classList.remove('prevent-scroll');
  document.querySelector('.loader').classList.add('loader__finished');
}