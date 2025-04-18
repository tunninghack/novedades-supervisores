// login.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Definimos las credenciales de los usuarios (esto puede mejorarse con una base de datos o API)
    const usuarios = {
        'supervisor_sanCristobal': { password: '1234', panel: 'san-cristobal.html' },
        'supervisor_usaquen': { password: '5678', panel: 'usaquen.html' }
    };

    // Verificamos si el usuario existe
    if (usuarios[username] && usuarios[username].password === password) {
        // Si las credenciales son correctas, redirigimos al panel correspondiente
        window.location.href = usuarios[username].panel;
    } else {
        // Si las credenciales son incorrectas, mostramos un mensaje de error
        alert("Usuario o contraseña incorrectos.");
    }
});
