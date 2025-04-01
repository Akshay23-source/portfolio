let menu = document.querySelector("nav"); // Select the nav element
let bar = document.querySelector(".fa-bars"); // Select the hamburger icon

// Toggle menu visibility on click
bar.addEventListener("click", function () {
  menu.classList.toggle("show");
});

const colors = [
  "#d20962",
  "#0ebeff",
  "#7ac143",
  "#00a78e",
  "#00bce4",
  "#8e43e7",
  "#005be2",
];
const numBalls = 30;
const balls = [];

// Create and style balls
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
  ball.style.transform = `scale(${Math.random() + 0.5})`; // Ensure balls are not too small
  ball.style.width = `${Math.random() * 2 + 0.5}em`; // Ensure minimum size
  ball.style.height = ball.style.width;
  balls.push(ball);
  document.getElementById("hero-area").append(ball);
}

// Add hover animation
balls.forEach((ball) => {
  ball.addEventListener("mouseover", () => {
    ball.style.transform = "scale(1.5)";
    ball.style.transition = "transform 0.3s ease";
  });

  ball.addEventListener("mouseout", () => {
    ball.style.transform = "scale(1)";
    ball.style.transition = "transform 0.3s ease";
  });
});

// Add double-click animation
balls.forEach((ball) => {
  ball.addEventListener("dblclick", () => {
    ball.style.animation = "bounce 1s ease";
    setTimeout(() => {
      ball.style.animation = ""; // Reset animation
    }, 1000);
  });
});

// Keyframes for bounce animation
const style = document.createElement("style");
style.innerHTML = `
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Select the hero section
const heroArea = document.getElementById("hero-area");

// Array of vibrant colors
const colorsVar = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#FFC733",
];

function createBubble(event) {
  const square = document.createElement("div");
  square.classList.add("bubble");

  // Randomize size, color, and animation duration
  const size = Math.random() * 20 + 10; // Size between 10px and 30px
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.backgroundColor =
    colors[Math.floor(Math.random() * colorsVar.length)]; // Random color
  square.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duration between 1s and 3s

  // Add random offsets to create spacing between bubbles
  const offsetX = Math.random() * 20 - 10; // Random offset between -10px and 10px
  const offsetY = Math.random() * 20 - 10; // Random offset between -10px and 10px
  square.style.left = `${event.clientX + offsetX}px`;
  square.style.top = `${event.clientY + offsetY}px`;

  // Append the square to the hero section
  heroArea.appendChild(square);

  // Remove the square after animation ends
  setTimeout(() => {
    square.remove();
  }, 3000); // Matches the longest animation duration
}

// Add mousemove event listener to the hero section
heroArea.addEventListener("mousemove", createBubble);
