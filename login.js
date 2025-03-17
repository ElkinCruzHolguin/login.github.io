document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Persistencia de sesión
    const usuarios = localStorage.getItem('usuarios');
    if (usuarios) {
        messageDiv.textContent = `¡Bienvenido, ${usuarios}!`;
        return; 
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validación de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            messageDiv.textContent = 'Correo electrónico no válido.';
            return;
        }

        // Validación de contraseña
        if (password.length < 6) {
            messageDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            return;
        }

        // Simulación de autenticación (reemplaza con tu lógica real)
        if (email === 'prueba@gmail.com' && password === '123456') {
            localStorage.setItem('usuarios', email);
            messageDiv.textContent = `¡Bienvenido, ${email}!`;
        } else {
            messageDiv.textContent = 'Credenciales incorrectas.';
        }
    });
});