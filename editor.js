document.addEventListener('DOMContentLoaded', function() {
    const jsonTemplate = JSON.parse(localStorage.getItem('jsonTemplate'));
    const colorPickerContainer = document.getElementById('color-picker-container');

    for (const [key, value] of Object.entries(jsonTemplate)) {
        if (Array.isArray(value)) {
            value.forEach((color, index) => {
                const colorPicker = createColorPicker(`${key}${index + 1}`, color);
                colorPickerContainer.appendChild(colorPicker);
            });
        } else {
            const colorPicker = createColorPicker(key, value);
            colorPickerContainer.appendChild(colorPicker);
        }
    }

    document.getElementById('generate-json').addEventListener('click', function() {
        const updatedJson = {};
        for (const [key, value] of Object.entries(jsonTemplate)) {
            if (Array.isArray(value)) {
                updatedJson[key] = value.map((_, index) => document.getElementById(`${key}${index + 1}`).value);
            } else {
                updatedJson[key] = document.getElementById(key).value;
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
