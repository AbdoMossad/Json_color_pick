document.getElementById('submit-template').addEventListener('click', function() {
    const jsonInput = document.getElementById('json-input').value;
    localStorage.setItem('jsonTemplate', jsonInput);
    alert('Template saved!');
    // Redirect to the editor page
    window.location.href = 'editor.html';
});
