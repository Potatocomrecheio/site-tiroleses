const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const welcome = document.querySelector(".welcome");
const mainContent = document.querySelector(".main-content");
const aboutBtn = document.getElementById("aboutBtn");
const modalOverlay = document.getElementById("modalOverlay");

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

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});
