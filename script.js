document.addEventListener('DOMContentLoaded', function() {
    const greenSlider = document.getElementById('green-slider');
    const redSlider = document.getElementById('red-slider');
    const greenSection = document.getElementById('green-section');
    const redSection = document.getElementById('red-section');
    const greenHex = document.getElementById('green-hex');
    const redHex = document.getElementById('red-hex');
    
    // Función para actualizar el color verde
    function updateGreenColor(value) {
        // Convertir el valor del slider (0-100) a un valor hexadecimal (00-FF)
        const intensity = Math.round(value * 2.55).toString(16).padStart(2, '0');
        const newColor = `#00${intensity}47`;
        greenSection.style.backgroundColor = newColor;
        greenHex.textContent = newColor.toUpperCase();
    }
    
    // Función para actualizar el color rojo
    function updateRedColor(value) {
        // Convertir el valor del slider (0-100) a un valor hexadecimal (00-FF)
        const intensity = Math.round(value * 2.55).toString(16).padStart(2, '0');
        const newColor = `#${intensity}1126`;
        redSection.style.backgroundColor = newColor;
        redHex.textContent = newColor.toUpperCase();
    }
    
    // Inicializar los colores
    updateGreenColor(60);
    updateRedColor(70);
    
    // Event listeners para los sliders
    greenSlider.addEventListener('input', function() {
        updateGreenColor(this.value);
    });
    
    redSlider.addEventListener('input', function() {
        updateRedColor(this.value);
    });
});