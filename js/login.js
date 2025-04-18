document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que se recargue la página al enviar el formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Definimos las credenciales de los usuarios
    const usuarios = {
        'supervisor_sanCristobal': { password: '1234', panel: 'san-cristobal.html' },
        'supervisor_usaquen': { password: '5678', panel: 'usaquen.html' },
        'supervisor_enlace': { password: 'admin123', panel: 'index.html' }  // Usuario para el enlace
    };

    // Verificamos si el usuario existe y la contraseña es correcta
    if (usuarios[username] && usuarios[username].password === password) {
        // Si las credenciales son correctas, almacenamos la sesión y redirigimos al panel correspondiente
        localStorage.setItem('isLoggedIn', true);
        window.location.href = usuarios[username].panel;
    } else {
        // Si las credenciales son incorrectas, mostramos un mensaje de error
        alert("Usuario o contraseña incorrectos.");
    }
});
