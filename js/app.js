document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    const concesion = document.getElementById('concesion').value;  // Obtener la concesión seleccionada
    const novedad = document.getElementById('novedad').value;  // Obtener la descripción de la novedad
    const imagenes = document.getElementById('imagenes').files;  // Obtener las imágenes seleccionadas

    // Convertir las imágenes en un array de nombres de archivos
    const imagenesArray = Array.from(imagenes).map(file => file.name);

    // Crear el objeto de novedad
    const novedadObj = {
        concesion: concesion,
        novedad: novedad,
        imagenes: imagenesArray
    };

    // Obtener las novedades guardadas en localStorage (o crear un array vacío si no existen)
    let novedades = JSON.parse(localStorage.getItem(concesion)) || [];

    // Añadir la nueva novedad al array
    novedades.push(novedadObj);

    // Guardar las novedades de la concesión en localStorage
    localStorage.setItem(concesion, JSON.stringify(novedades));

    // Redirigir a la página correspondiente (según la concesión seleccionada)
    if (concesion === 'sanCristobal') {
        window.location.href = 'san-cristobal.html';  // Redirige a San Cristóbal
    } else {
        window.location.href = 'usaquen.html';  // Redirige a Usaquén
    }
});
