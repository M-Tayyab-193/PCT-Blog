
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  btn.style.display = window.scrollY > 100 ? "block" : "none";
};


window.onload = function () {
  updateDateAndTime();
  setInterval(updateDateAndTime, 1000);
};


document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function showMsg() {
  window.alert("Welcome to Pakistan Cricket Team - PCT BLOG")
}


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const termsChecked = document.getElementById("terms").checked;
    const feedback = document.getElementById("feedback").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate required fields
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

  // Get the canvas and context for drawing
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Background (field)
  ctx.fillStyle = "lightgreen";  // Set field color to light green
  ctx.fillRect(0, 0, canvas.width, canvas.height);  // Draw field area

  // 🏏 Cricket Bat (Handle and Blade)
  ctx.fillStyle = "brown";  // Set color for bat handle
  ctx.fillRect(250, 280, 10, 60);  // Draw bat handle
  ctx.fillStyle = "peru";  // Set color for bat blade
  ctx.fillRect(220, 290, 60, 20);  // Draw bat blade

  // 🏏 Cricket Ball
  ctx.beginPath();  // Begin drawing the ball
  ctx.arc(160, 250, 12, 0, Math.PI * 2);  // Ball position and size
  ctx.fillStyle = "red";  // Set ball color
  ctx.fill();  // Fill ball with color
  ctx.strokeStyle = "white";  // Set ball stroke color
  ctx.stroke();  // Stroke ball outline

  // 🏏 Stumps (Wickets)
  ctx.fillStyle = "saddlebrown";  // Set color for stumps
  for (let i = 0; i < 3; i++) {
    ctx.fillRect(350 + i * 20, 200, 5, 80);  // Draw each stump
  }

  // 🏏 Bails (Top of the stumps)
  ctx.fillStyle = "brown";  // Set color for bails
  ctx.fillRect(350, 195, 20, 5);  // Top bail
  ctx.fillRect(370, 195, 20, 5);  // Second bail

  // 🏃‍♂️ Cricket Player (Stick Figure)
  ctx.fillStyle = "blue";  // Set player jersey color
  ctx.fillRect(230, 230, 15, 30);  // Draw player body (torso)
  ctx.fillStyle = "blue";
  ctx.fillRect(230, 260, 5, 15);  // Draw left leg
  ctx.fillRect(240, 260, 5, 15);  // Draw right leg
  ctx.fillStyle = "black";
  ctx.fillRect(225, 230, 5, 10);  // Draw left arm
  ctx.fillRect(240, 230, 5, 10);  // Draw right arm

  // 🏏 Player's Head
  ctx.beginPath();  // Begin drawing the head
  ctx.arc(237, 215, 10, 0, Math.PI * 2);  // Head position and size
  ctx.fillStyle = "peachpuff";  // Set head color
  ctx.fill();  // Fill head
  ctx.stroke();  // Outline head

  // 🏏 Bat's position relative to the player
  ctx.fillStyle = "brown";  // Set bat color
  ctx.fillRect(215, 270, 10, 40);  // Draw bat

});




function toggleVisibility() {
  const newCards = document.querySelectorAll('.new-card');
  const arrow = document.getElementById('arrow');
  const more = document.getElementById('more');
  const isExpanding = more.textContent.trim() === "Show More";

  if (isExpanding) {
    arrow.style.transform = "scaleY(-1)";
    more.textContent = "Show Less";
  } else {
    arrow.style.transform = "scaleY(1)";
    more.textContent = "Show More";
  }

  newCards.forEach(card => {
    if (isExpanding) {
      card.classList.add('show');
      card.style.height = card.scrollHeight + 'px'; // animate to actual height
    } else {
      card.style.height = card.scrollHeight + 'px'; // set current height first
      // force reflow to trigger transition
      void card.offsetHeight;
      card.style.height = '0px'; // collapse
      card.classList.remove('show');
    }
  });
}


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


