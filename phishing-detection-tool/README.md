# Phishing Detection Tool

## Overview
The Phishing Detection Tool is a browser extension designed to protect users from phishing websites. It analyzes URLs and webpage content for signs of phishing, warning users when potential threats are detected.

## Features
- **URL Pattern Analysis**: Detects suspicious keywords and patterns in URLs.
- **Webpage Content Analysis**: Checks for phishing keywords in the content.
- **Popup Alerts**: Provides users with warnings and guidance on potentially dangerous pages.

## Project Structure
- **manifest.json**: Configures the extension.
- **background/**: Monitors URLs and triggers alerts.
- **content/**: Analyzes webpage content.
- **popup/**: Provides user interface for alerts and additional info.
- **assets/**: Stores the extension icon.
- **scripts/**: Contains utility functions.
- **db/**: Optional local database for known phishing URLs.

## Installation
1. Open the browser's extension page (e.g., `chrome://extensions`).
2. Enable **Developer mode**.
3. Select **Load unpacked** and upload the project folder.

## Usage
Navigate to any website, and the extension will automatically analyze it. If it detects phishing indicators, you’ll receive an alert in the popup.
