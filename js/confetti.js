// Function Definition
import confetti from "https://cdn.skypack.dev/canvas-confetti@1.3.3";

// Call/Invoke/Use it
confetti();

// on click
window.addEventListener("click", () => {
  confetti({
    spread: 500,
    gravity: 0.05
  });
});
