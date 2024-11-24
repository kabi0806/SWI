// content/content.js

window.addEventListener('load', () => {
  const forms = document.querySelectorAll('form');
  if (forms.length > 0 && detectPhishingKeywords()) {
    alert("Warning: This webpage may be attempting to phish your information.");
  }
});

// Detect common phishing keywords
function detectPhishingKeywords() {
  const keywords = ["verify", "account", "password", "bank", "security", "login"];
  return keywords.some(keyword => document.body.innerText.toLowerCase().includes(keyword));
}
