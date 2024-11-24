// popup/popup.js

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0];
    chrome.runtime.sendMessage({ url: tab.url }, response => {
      document.getElementById('status').innerText = response.isPhishing
        ? "Warning: This site may be a phishing site!"
        : "This site appears safe.";
    });
  });

  document.getElementById('ignore').addEventListener('click', () => {
    window.close();
  });
});
