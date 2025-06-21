function message() {
    const message = "Happy Birthday Pauline";
    const messageText = document.querySelector(".message__text");
    const messageContainer = document.querySelector(".message");
    const messageBtn = document.querySelector(".message__btn");
    const reloadBtn = document.querySelector(".reload");
    const particlesContainer = document.getElementById("particles-js");
  
    const colors = ["#1e293b", "#ffd166", "#3a86ff", "#2ec4b6"];
    let colorIndex = 0;
  
    // Event Listeners
    messageBtn.addEventListener("click", openMessage);
    reloadBtn.addEventListener("click", openMessage);
  
    // Message Reveal Logic
    function openMessage() {
      if (messageContainer.classList.contains("clicked")) {
        messageContainer.classList.remove("clicked");
        reloadBtn.style.display = "none";
        particlesContainer.classList.remove("show");
        messageText.innerHTML = ""; // Reset message
      } else {
        messageContainer.classList.add("clicked");
        reloadBtn.style.display = "block";
  
        // Show message letters with shadow layers
        const messageSplit = message.split("");
        messageSplit.forEach((char, index) => {
          const span = document.createElement("span");
          span.classList.add("message__letters");
          span.style.animationDelay = `${0.6 + index * 0.2}s`;
  
          const main = document.createElement("span");
          main.classList.add("message__letterMain");
          main.style.color = colors[colorIndex % colors.length];
          main.innerHTML = char === " " ? "&nbsp;" : char;
  
          const shadow = document.createElement("span");
          shadow.classList.add("message__letterShadow");
          shadow.innerHTML = char === " " ? "&nbsp;" : char;
  
          span.appendChild(main);
          span.appendChild(shadow);
          messageText.appendChild(span);
          colorIndex++;
        });
  
        // Show particles
        setTimeout(() => {
          particlesContainer.classList.add("show");
        }, 1000);
      }
    }
  
    // ---- particles.js config ----
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: {
          value: [
            "#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54",
            "#ffffff", "#cc444b", "#ff6b6b", "#e63946"
          ]
        },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 }
        },
        opacity: { value: 1 },
        size: { value: 6, random: true },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 6,
          direction: "top",
          random: true,
          out_mode: "bounce"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
  
  document.addEventListener("DOMContentLoaded", message);
  