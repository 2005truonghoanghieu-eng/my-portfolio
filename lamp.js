const carousel = document.getElementById("carousel");
const btnToggle = document.getElementById("btnToggle");
const statusEl = document.getElementById("status");

let running = true;

function setRunning(isRunning){
  running = isRunning;
  carousel.style.animationPlayState = running ? "running" : "paused";
  statusEl.textContent = running ? "Đang quay..." : "Đang dừng.";
}

btnToggle.addEventListener("click", () => {
  setRunning(!running);
});

/* Hover dừng / ra ngoài chạy tiếp */
carousel.addEventListener("mouseenter", () => setRunning(false));
carousel.addEventListener("mouseleave", () => setRunning(true));
