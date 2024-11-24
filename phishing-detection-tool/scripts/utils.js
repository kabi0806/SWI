// scripts/utils.js

import API_CONFIG from '../config/config.js';

// Function to check URL with Google Safe Browsing API
async function checkUrlWithPhishingAPI(url) {
  const requestPayload = {
    client: {
      clientId: "phishing-detection-extension",
      clientVersion: "1.0"
    },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url: url }]
    }
  };

  try {
    const response = await fetch(`${API_CONFIG.API_ENDPOINT}?key=${API_CONFIG.GOOGLE_SAFE_BROWSING_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestPayload)
    });

    const data = await response.json();
    return data.matches && data.matches.length > 0;  // Returns true if threats are found
  } catch (error) {
    console.error("Error checking URL with phishing API:", error);
    return false;
  }
}

export { checkUrlWithPhishingAPI };
