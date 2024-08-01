document.addEventListener('DOMContentLoaded', function() {
    const jsonTemplate = JSON.parse(localStorage.getItem('jsonTemplate'));
    const colorPickerContainer = document.getElementById('color-picker-container');

    for (const [key, value] of Object.entries(jsonTemplate)) {
        if (typeof value === 'string' && value.startsWith('#')) {
            const colorPicker = createColorPicker(key, value);
            colorPickerContainer.appendChild(colorPicker);
        }
    }

    document.getElementById('generate-json').addEventListener('click', function() {
        const updatedJson = {};
        for (const [key, value] of Object.entries(jsonTemplate)) {
            if (typeof value === 'string' && value.startsWith('#')) {
                updatedJson[key] = document.getElementById(key).value;
            } else {
                updatedJson[key] = value;
            }
        }
        document.getElementById('output').textContent = JSON.stringify(updatedJson, null, 2);
    });
});

function createColorPicker(id, color) {
    const div = document.createElement('div');
    div.className = 'color-picker';
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = `${id.replace(/_/g, ' ')}:`;
    const input = document.createElement('input');
    input.type = 'color';
    input.id = id;
    input.name = id;
    input.value = color;
    div.appendChild(label);
    div.appendChild(input);
    return div;
}
