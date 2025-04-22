// Show button after scrolling 100px
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    btn.style.display = window.scrollY > 100 ? "block" : "none";
  };
  
  // Scroll to top on click
  document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  