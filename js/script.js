// Show welcome message on homepage
function showMsg() {
  window.alert("Welcome to Pakistan Cricket Team - PCT BLOG");
}

// Run on window load
window.onload = function () {
  // Show alert only on index.html
  if (window.location.pathname.includes("index.html")) {
    showMsg();
  }

  // Start live date & time update
  updateDateAndTime();
  setInterval(updateDateAndTime, 1000);
};

// Show/hide back-to-top button based on scroll
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  btn.style.display = window.scrollY > 100 ? "block" : "none";
};

// Smooth scroll to top when button clicked
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Handle feedback form submission
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    // Get user input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const termsChecked = document.getElementById("terms").checked;
    const feedback = document.getElementById("feedback").value.trim();

    // Simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic form validation
    if (!name) {
      alert("Name is required.");
      return;
    }
    if (!email) {
      alert("Email is required.");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Invalid email format.");
      return;
    }
    if (!feedback) {
      alert("Feedback is required.");
      return;
    }
    if (!termsChecked) {
      alert("You must accept the terms and conditions.");
      return;
    }

    alert("Form submitted successfully!");
  });

  // Canvas drawing setup
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Draw cricket field
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw cricket bat
  ctx.fillStyle = "brown";
  ctx.fillRect(250, 280, 10, 60); // handle
  ctx.fillStyle = "peru";
  ctx.fillRect(220, 290, 60, 20); // blade

  // Draw red cricket ball
  ctx.beginPath();
  ctx.arc(160, 250, 12, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();

  // Draw 3 stumps
  ctx.fillStyle = "saddlebrown";
  for (let i = 0; i < 3; i++) {
    ctx.fillRect(350 + i * 20, 200, 5, 80);
  }

  // Draw bails on top
  ctx.fillStyle = "brown";
  ctx.fillRect(350, 195, 20, 5);
  ctx.fillRect(370, 195, 20, 5);

  // Draw stick figure player
  ctx.fillStyle = "blue"; // jersey
  ctx.fillRect(230, 230, 15, 30); // body
  ctx.fillRect(230, 260, 5, 15); // left leg
  ctx.fillRect(240, 260, 5, 15); // right leg
  ctx.fillStyle = "black";
  ctx.fillRect(225, 230, 5, 10); // left arm
  ctx.fillRect(240, 230, 5, 10); // right arm

  // Draw player head
  ctx.beginPath();
  ctx.arc(237, 215, 10, 0, Math.PI * 2);
  ctx.fillStyle = "peachpuff";
  ctx.fill();
  ctx.stroke();

  // Draw player bat
  ctx.fillStyle = "brown";
  ctx.fillRect(215, 270, 10, 40);
});

// Toggle visibility of "Show More" cards
function toggleVisibility() {
  const newCards = document.querySelectorAll('.new-card');
  const arrow = document.getElementById('arrow');
  const more = document.getElementById('more');
  const isExpanding = more.textContent.trim() === "Show More";

  // Toggle arrow and button text
  arrow.style.transform = isExpanding ? "scaleY(-1)" : "scaleY(1)";
  more.textContent = isExpanding ? "Show Less" : "Show More";

  // Expand or collapse cards
  newCards.forEach(card => {
    if (isExpanding) {
      card.classList.add('show');
      card.style.height = card.scrollHeight + 'px';
    } else {
      card.style.height = card.scrollHeight + 'px';
      void card.offsetHeight; // trigger reflow
      card.style.height = '0px';
      card.classList.remove('show');
    }
  });
}

// Update footer with live date and time
function updateDateAndTime() {
  const now = new Date();

  const dateOptions = {
    weekday: 'short',
    day: '2-digit',
    month: 'long'
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const formattedDate = now.toLocaleDateString('en-US', dateOptions);
  const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

  document.getElementById('footer-date').textContent = formattedDate;
  document.getElementById('footer-time').textContent = formattedTime;
}
