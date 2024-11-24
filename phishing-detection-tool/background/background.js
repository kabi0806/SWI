// background/background.js

import API_CONFIG from '../config/config.js';
import { checkUrlWithPhishingAPI } from '../scripts/utils.js';

// Listen for URL changes in active tabs
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    checkUrlWithPhishingAPI(tab.url).then(isPhishing => {
      if (isPhishing) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: () => alert("Warning: This website may be a phishing or unsafe site!")
        });
      }
    });
  }
});
