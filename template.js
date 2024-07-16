document.getElementById('submit-template').addEventListener('click', function() {
    const jsonInput = document.getElementById('json-input').value.trim(); // Get the JSON input and trim any extra whitespace
    try {
        const template = JSON.parse(jsonInput); // Parse the JSON input
        
        // Initialize an object to store color values
        const colors = {};
        
        // Function to check if a string is a valid hex color
        function isValidHexColor(str) {
            return /^#[0-9A-F]{6}$/i.test(str);
        }
        
        // Loop through each key in the template
        for (const key in template) {
            if (Object.prototype.hasOwnProperty.call(template, key)) {
                const value = template[key];
                
                // Check if the value is a valid color
                if (typeof value === 'string' && isValidHexColor(value)) {
                    colors[key] = value; // Store the color value
                }
            }
        }
        
        // Store colors in localStorage
        localStorage.setItem('jsonColors', JSON.stringify(colors));
        
        // Redirect to the editor page
        window.location.href = 'editor.html';
        
    } catch (error) {
        console.error('Invalid JSON format:', error);
        // Handle parsing errors if JSON input is invalid
        // Optionally show an alert or error message to the user
    }
});

