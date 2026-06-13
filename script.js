// LAXMAN SHRESTHA PORTFOLIO INTERACTIVITY CONTROL SCRIPT

// Current language state
let currentLang = 'en';

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Odometer live ticker incrementer simulation (simulates passive visitor hits)
  setInterval(() => {
    const odoLive = document.getElementById("odo-live");
    if (odoLive) {
      let val = parseInt(odoLive.innerText);
      if (Math.random() > 0.6) {
        val = (val + 1) % 10;
        odoLive.innerText = val.toString();
      }
    }
  }, 4500);
});

// LANGUAGE SWITCHER ENGINE
function switchLanguage(lang) {
  currentLang = lang;
  
  // Highlight correct language button
  const btns = document.querySelectorAll(".lang-btn");
  btns.forEach(btn => btn.classList.remove("active"));
  
  const targetId = `btn-${lang}`;
  const targetBtn = document.getElementById(targetId);
  if (targetBtn) {
    targetBtn.classList.add("active");
  }

  // Update translatable elements with precise translation mapping
  const translateElements = document.querySelectorAll("[data-en]");
  translateElements.forEach(el => {
    const textEn = el.getAttribute("data-en");
    const textNe = el.getAttribute("data-ne");
    
    if (lang === "en") {
      el.innerHTML = textEn;
    } else {
      el.innerHTML = textNe;
    }
  });
}

// category filter handler (scroll to top for Home category)
function showCategory(category) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


