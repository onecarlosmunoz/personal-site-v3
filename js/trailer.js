const trailer = document.getElementById("trailer");
const icon = document.getElementById("trailer__icon");
const text = document.getElementById("trailer__text");

trailer.classList.add("trailer--visible");

const anchors = [
  {
    "datatype": "link/linkedin",
    "text": "visit my linkedin",
    "src": "/img/linkedin.svg",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "link/github",
    "text": "view source code",
    "src": "/img/github.svg",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "noimage",
    "text": "scroll down",
    "src": "",
    "textClass": "trailer__text--left"
  },
  {
    "datatype": "link/spotify",
    "text": "open spotify",
    "src": "/img/spotify.svg",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "link/mail",
    "text": "send me an email",
    "src": "/img/mail.svg",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "link/resume",
    "text": "download résumé ",
    "src": "/img/download.svg",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "noimage/bio",
    "text": "",
    "src": "",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "noimage/experience",
    "text": "",
    "src": "",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "noimage/funstuff",
    "text": "",
    "src": "",
    "textClass": "trailer__text--right"
  },
  {
    "datatype": "link/toby",
    "text": "open new tab",
    "src": "/img/toby-headshot1.png",
    "textClass": "trailer__text--left"
  }
];

// Throttle the mousemove event to ~60fps
let lastFrameTime = 0;

export function initializeTrailer() {
  window.onmousemove = e => {
    const now = Date.now();
    if (now - lastFrameTime < 16) return;  // ~60fps (1000ms / 60)

    lastFrameTime = now;

    const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;

    animateTrailer(e, interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if (interacting) {
      let anchorObj = anchors.find(o => o.datatype === interactable.dataset.type);

      // Check if the src, text or class need to be updated before applying changes
      if (icon.src !== anchorObj.src) {
        icon.src = anchorObj.src;
      }

      if (text.innerText !== anchorObj.text) {
        text.innerText = anchorObj.text;
      }
      
      if (!text.classList.contains(anchorObj.textClass)) {
        if (text.className != anchorObj.textClass) {
          text.className = '';
        }
        
        text.classList.add(anchorObj.textClass);
      }

      if (text.className != anchorObj.textClass) {
        text.className = '';
        text.classList.add(anchorObj.textClass);
      }

    } else {
      icon.classList.add("trailer__icon--hidden");
    }
  };
}

let animationFrameId;
function animateTrailer(e, interacting) {
  cancelAnimationFrame(animationFrameId);

  animationFrameId = requestAnimationFrame(() => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
    };

    trailer.animate(keyframes, { 
      duration: 300, 
      fill: "forwards" 
    });
  });
}
