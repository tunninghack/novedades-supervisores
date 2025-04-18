// usaquen.js

document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está autenticado
    if (!localStorage.getItem('isLoggedIn')) {
        // Si no está autenticado, redirigimos al login
        window.location.href = 'login.html';
    }

    // Recupera las novedades almacenadas en localStorage
    const novedades = JSON.parse(localStorage.getItem("novedades")) || [];

    // Filtra las novedades correspondientes a Usaquén
    const novedadesUsaquen = novedades.filter(novedad => novedad.concesion === "usaquen");

    // Obtiene el contenedor donde mostrar las novedades
    const contenedor = document.getElementById("novedades-usaquen");

    // Si no hay novedades, muestra un mensaje
    if (novedadesUsaquen.length === 0) {
        contenedor.innerHTML = "<p>No hay novedades para mostrar.</p>";
    } else {
        // Recorre las novedades y las muestra
        novedadesUsaquen.forEach(novedad => {
            const novedadElement = document.createElement("div");
            novedadElement.classList.add("novedad");

            const novedadHTML = `
                <h3>Novedad:</h3>
                <p>${novedad.novedad}</p>
                <h4>Imágenes:</h4>
                <ul>
                    ${novedad.imagenes.map(img => `<li><img src="${URL.createObjectURL(img)}" alt="Imagen" width="100" /></li>`).join('')}
                </ul>
            `;
            novedadElement.innerHTML = novedadHTML;
            contenedor.appendChild(novedadElement);
        });
    }
});
