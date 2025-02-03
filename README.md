# YWH Scopes Extractor Browser Extension

A browser extension designed to extract scopes from YesWeHack platform tables, specifically targeting entries with types "api" or "web-application". Compatible with both Chrome and Firefox.

## Features

- Automatically extracts scopes from YesWeHack tables
- Filters entries by type ("api" or "web-application")
- Easy one-click copying of all extracted scopes
- Clean and simple popup interface
- Cross-browser compatibility (Chrome and Firefox)

## Building and Installing

### Prerequisites
- Google Chrome and/or Firefox browser
- Developer mode enabled in Chrome (for Chrome installation)

### Installation in Chrome

1. Clone or download this repository to your local machine

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" by toggling the switch in the top right corner

4. Click on "Load unpacked" button

5. Select the directory containing the extension files

### Installation in Firefox

1. Clone or download this repository to your local machine

2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`

3. Click on "Load Temporary Add-on"

4. Navigate to the extension directory and select the `manifest.json` file

### Usage

1. After installation, you'll see the YWH Scopes Extractor icon in your browser toolbar

2. Navigate to any YesWeHack page containing scope tables

3. Click the extension icon to view extracted scopes from the current page

4. Use the "Copy All Scopes" button to copy all extracted scopes to your clipboard

### Building for Release

#### Chrome Web Store Release
1. Zip all the extension files
2. Submit the zip file to the Chrome Web Store Developer Dashboard
3. Follow the Chrome Web Store publishing guidelines

#### Firefox Add-ons Release
1. Create a zip file of your extension
2. Create an account on [Mozilla Add-ons Developer Hub](https://addons.mozilla.org/developers/)
3. Submit the extension for review
4. Once approved, the extension will be available on Firefox Add-ons

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