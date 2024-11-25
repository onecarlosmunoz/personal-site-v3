import { initializePreloader } from './preloader.js';
import { initializeTrailer } from './trailer.js';
import { initializeLenis } from './lenis.js';
import { initializeScrollHandlers } from './scrollHandlers.js';

document.addEventListener("DOMContentLoaded", () => {
  initializePreloader();
  initializeTrailer();
  initializeLenis();
  initializeScrollHandlers();
});