const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const welcome = document.querySelector(".welcome");
const mainContent = document.querySelector(".main-content");
const aboutBtn = document.getElementById("aboutBtn");
const modalOverlay = document.getElementById("modalOverlay");
const eventBtn = document.getElementById("eventBtn");
const eventModal = document.getElementById("eventModal");
const locationBtn = document.getElementById("locationBtn");
const locationModal = document.getElementById("locationModal");
const openAboutFromEvent = document.getElementById("openAboutFromEvent");

startBtn.addEventListener("click", () => {
  welcome.classList.add("hidden");
  mainContent.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  welcome.classList.remove("hidden");
});

aboutBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

eventBtn.addEventListener("click", () => {
  eventModal.classList.add("active");
});

locationBtn.addEventListener("click", () => {
  locationModal.classList.add("active");
});

function closeModal() {
  modalOverlay.classList.remove("active");
}

function closeEventModal() {
  eventModal.classList.remove("active");
}

function closeLocationModal() {
  locationModal.classList.remove("active");
}

openAboutFromEvent.addEventListener("click", () => {
  eventModal.classList.remove("active");
  modalOverlay.classList.add("active");
});

// Cores cíclicas do botão eventos
const eventColors = ["#e74c3c", "#2ecc71", "#3498db", "#f1c40f"];
let colorIndex = 0;

eventBtn.addEventListener("mouseover", () => {
  let interval = setInterval(() => {
    eventBtn.style.backgroundColor = eventColors[colorIndex];
    eventBtn.style.color = "white"; // Garante que o texto continue branco
    colorIndex = (colorIndex + 1) % eventColors.length;
  }, 300);

  eventBtn.addEventListener("mouseout", () => {
    clearInterval(interval);
    eventBtn.style.backgroundColor = "#34aadc";
  }, { once: true });
});
