# Page Title Extractor Chrome Extension

A simple Chrome extension that automatically extracts and displays the title of the current web page.

## Building and Installing

### Prerequisites
- Chrome browser
- Basic understanding of how to load unpacked extensions

### Installation Steps

1. Clone or download this repository to your local machine

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" by toggling the switch in the top right corner

4. Click on "Load unpacked" button

5. Select the directory containing the extension files (manifest.json, popup.html, and popup.js)

### Usage

1. After installation, you'll see the extension icon in your Chrome toolbar

2. Navigate to any webpage containing the target table

3. Click on the extension icon to see the extracted first column entries where the type is "api" or "web-application" automatically displayed in the popup.

4. Click the "Copy All Scopes" button to copy all extracted scopes to your clipboard. A toast notification will appear confirming the action.

### Files Structure 