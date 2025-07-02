const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const welcome = document.querySelector(".welcome");
const mainContent = document.querySelector(".main-content");

const aboutBtn = document.getElementById("aboutBtn");
const modalOverlay = document.getElementById("modalOverlay");

const eventBtn = document.getElementById("eventBtn");
const eventModal = document.getElementById("eventModal");
const openAboutFromEvent = document.getElementById("openAboutFromEvent");
const eventAboutModal = document.getElementById("eventAboutModal");

const locationBtn = document.getElementById("locationBtn");
const locationModal = document.getElementById("locationModal");

startBtn.addEventListener("click", () => {
  welcome.classList.add("hidden");
  mainContent.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  welcome.classList.remove("hidden");
  mainContent.classList.add("hidden");
});

aboutBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

eventBtn.addEventListener("click", () => {
  eventModal.classList.add("active");
});

openAboutFromEvent.addEventListener("click", () => {
  eventModal.classList.remove("active");
  eventAboutModal.classList.add("active");
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

function closeEventAboutModal() {
  eventAboutModal.classList.remove("active");
}

function closeLocationModal() {
  locationModal.classList.remove("active");
}

// Efeito de cor cíclica do botão Eventos
const eventColors = ["#e74c3c", "#2ecc71", "#3498db", "#f1c40f"];
let colorIndex = 0;

eventBtn.addEventListener("mouseover", () => {
  let interval = setInterval(() => {
    eventBtn.style.backgroundColor = eventColors[colorIndex];
    eventBtn.style.color = "white";
    colorIndex = (colorIndex + 1) % eventColors.length;
  }, 300);

  eventBtn.addEventListener("mouseout", () => {
    clearInterval(interval);
    eventBtn.style.backgroundColor = "#34aadc";
  }, { once: true });
});
