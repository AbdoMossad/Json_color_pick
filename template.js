document.getElementById('submit-template').addEventListener('click', function() {
    const jsonInput = document.getElementById('json-input').value;
    try {
        const parsedJson = JSON.parse(jsonInput);
        localStorage.setItem('jsonTemplate', JSON.stringify(parsedJson));
        window.location.href = 'editor.html';
    } catch (error) {
        alert('Invalid JSON input');
    }
});
