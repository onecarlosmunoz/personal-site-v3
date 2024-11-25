import { initializePreloader } from './preloader.js';
import { initializeLenis } from './lenis.js';
import { initializeScrollHandlers } from './scrollHandlers.js';

document.addEventListener("DOMContentLoaded", () => {
  initializePreloader();
  initializeLenis();
  initializeScrollHandlers();
});