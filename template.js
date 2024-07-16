document.getElementById('submit-template').addEventListener('click', function() {
    const jsonInput = document.getElementById('json-input').value;
    localStorage.setItem('jsonTemplate', jsonInput);
    alert('Template saved!');
});
