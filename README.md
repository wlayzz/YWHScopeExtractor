# YWH Scopes Extractor Chrome Extension

A Chrome extension designed to extract scopes from YesWeHack platform tables, specifically targeting entries with types "api" or "web-application".

## Features

- Automatically extracts scopes from YesWeHack tables
- Filters entries by type ("api" or "web-application")
- Easy one-click copying of all extracted scopes
- Clean and simple popup interface

## Building and Installing

### Prerequisites
- Google Chrome browser
- Developer mode enabled in Chrome

### Installation Steps

1. Clone or download this repository to your local machine

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" by toggling the switch in the top right corner

4. Click on "Load unpacked" button

5. Select the directory containing the extension files

### Usage

1. After installation, you'll see the YWH Scopes Extractor icon in your Chrome toolbar

2. Navigate to any YesWeHack page containing scope tables

3. Click the extension icon to view extracted scopes from the current page

4. Use the "Copy All Scopes" button to copy all extracted scopes to your clipboard

### Project Structure

- `manifest.json` - Extension configuration and permissions
- `popup.html` - Extension popup interface
- `popup.js` - Core functionality and scope extraction logic

### Permissions

The extension requires minimal permissions:
- `activeTab` - To access the current tab's content
- `scripting` - To run content scripts for extracting table data

## Version

Current version: 1.0 