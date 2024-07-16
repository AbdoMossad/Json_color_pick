document.addEventListener('DOMContentLoaded', function() {
    const jsonTemplate = JSON.parse(localStorage.getItem('jsonTemplate'));
    const container = document.getElementById('color-picker-container');

    if (jsonTemplate) {
        for (const key in jsonTemplate) {
            if (Array.isArray(jsonTemplate[key])) continue; // Skip arrays for simplicity

            const colorPicker = document.createElement('div');
            colorPicker.classList.add('color-picker');

            const label = document.createElement('label');
            label.innerText = key.replace(/_/g, ' ');

            const input = document.createElement('input');
            input.type = 'color';
            input.value = jsonTemplate[key];
            input.dataset.key = key;

            colorPicker.appendChild(label);
            colorPicker.appendChild(input);
            container.appendChild(colorPicker);
        }
    }

    document.getElementById('generate-json').addEventListener('click', function() {
        const newJson = {};

        document.querySelectorAll('.color-picker input').forEach(input => {
            newJson[input.dataset.key] = input.value;
        });

        document.getElementById('output').innerText = JSON.stringify(newJson, null, 2);
    });
});
