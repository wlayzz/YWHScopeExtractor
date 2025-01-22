// Execute this code as soon as popup loads
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Get the current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Execute script in the tab to extract table data using the scripting API
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Define the selector for the specific table rows
        // Adjust the selector based on your table's actual structure
        const rows = document.querySelectorAll('ywh-program-description section div div table tbody tr');
        
        // Array to store the extracted first column values
        const extractedData = [];
        
        // Iterate over each row
        rows.forEach(row => {
          const cells = row.querySelectorAll('td');
          if (cells.length >= 2) { // Ensure there are enough cells
            const firstColumn = cells[0].textContent.trim();
            const typeValue = cells[1].textContent.trim().toLowerCase();
            
            if (typeValue === 'api' || typeValue === 'web-application') {
              extractedData.push(firstColumn);
            }
          }
        });
        
        return extractedData;
      }
    });
    
    // Update the header title with the current tab's title
    const headerTitle = document.getElementById('header-title');
    headerTitle.textContent = `Scopes Extracted from "${tab.title}"`;
    
    // Display the extracted data
    const data = result[0].result;
    const scopesElement = document.getElementById('scopes');
    if (data.length > 0) {
      // Create a list to display the extracted scopes
      const list = document.createElement('ul');
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
      });
      scopesElement.innerHTML = ''; // Clear any existing content
      scopesElement.appendChild(list);
    } else {
      scopesElement.textContent = 'No matching entries found.';
    }

    // Add copy to clipboard functionality
    const copyButton = document.getElementById('copy-button');
    copyButton.addEventListener('click', () => {
      if (data.length === 0) {
        showToast('No scopes available to copy.', 'error');
        return;
      }
      
      // Combine all scopes into a single string separated by newlines
      const scopesText = data.join('\n');
      
      // Copy the scopes to the clipboard
      navigator.clipboard.writeText(scopesText).then(() => {
        showToast('All scopes copied to clipboard!', 'success');
      }).catch(err => {
        console.error('Failed to copy scopes: ', err);
        showToast('Failed to copy scopes.', 'error');
      });
    });

    // Function to show toast notifications
    function showToast(message, type) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      
      // Change background color based on the type
      if (type === 'success') {
        toast.style.backgroundColor = '#4CAF50'; // Green
      } else if (type === 'error') {
        toast.style.backgroundColor = '#f44336'; // Red
      } else {
        toast.style.backgroundColor = '#333'; // Default
      }
      
      toast.className = 'show';
      
      // After 3 seconds, remove the show class
      setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
    }
  } catch (error) {
    document.getElementById('scopes').textContent = 'Error: Could not extract data';
    console.error('Error:', error);
  }
});
