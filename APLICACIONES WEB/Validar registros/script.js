
document.getElementById('clientForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Obtener valores
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const ciudad = document.getElementById('ciudad');
    const notas = document.getElementById('notas');

    // Limpiar mensajes de error
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validar nombre: solo letras y espacios
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombre.value.trim() || !nombreRegex.test(nombre.value)) {
        document.getElementById('nombre-error').textContent = 'Ingrese un nombre válido (solo letras y espacios).';
        isValid = false;
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Ingrese un correo electrónico válido.';
        isValid = false;
    }

    // Validar teléfono: solo números y 10 caracteres
    const telefonoRegex = /^\d{10}$/;
    if (!telefono.value.trim() || !telefonoRegex.test(telefono.value)) {
        document.getElementById('telefono-error').textContent = 'Ingrese un teléfono válido (10 dígitos).';
        isValid = false;
    }

    // Validar dirección: máximo 50 caracteres
    if (direccion.value.length > 50) {
        alert('La dirección no puede exceder los 50 caracteres.');
        isValid = false;
    }

    // Validar ciudad: solo letras y espacios
    if (ciudad.value && !nombreRegex.test(ciudad.value)) {
        alert('La ciudad debe contener solo letras y espacios.');
        isValid = false;
    }

    // Validar notas adicionales: máximo 100 caracteres
    if (notas.value.length > 100) {
        alert('Las notas adicionales no pueden exceder los 100 caracteres.');
        isValid = false;
    }

    // Mostrar alertas si faltan campos obligatorios
    if (!nombre.value.trim() || !email.value.trim() || !telefono.value.trim()) {
        alert('Los campos Nombre, Correo y Teléfono son obligatorios.');
        isValid = false;
    }

    // Si alguna validación falla, prevenir envío
    if (!isValid) {
        event.preventDefault();
    }
});

