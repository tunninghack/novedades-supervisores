// sanCristobal.js

document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está autenticado
    if (!localStorage.getItem('isLoggedIn')) {
        // Si no está autenticado, redirigimos al login
        window.location.href = 'login.html';
    }

    // Recupera las novedades almacenadas en localStorage
    const novedades = JSON.parse(localStorage.getItem("novedades")) || [];

    // Filtra las novedades correspondientes a San Cristóbal
    const novedadesSanCristobal = novedades.filter(novedad => novedad.concesion === "sanCristobal");

    // Obtiene el contenedor donde mostrar las novedades
    const contenedor = document.getElementById("novedades-sancs");

    // Si no hay novedades, muestra un mensaje
    if (novedadesSanCristobal.length === 0) {
        contenedor.innerHTML = "<p>No hay novedades para mostrar.</p>";
    } else {
        // Recorre las novedades y las muestra
        novedadesSanCristobal.forEach(novedad => {
            const novedadElement = document.createElement("div");
            novedadElement.classList.add("novedad");

            const novedadHTML = `
                <h3>Novedad:</h3>
                <p>${novedad.novedad}</p>
                <h4>Imágenes:</h4>
                <ul>
                    ${novedad.imagenes ? novedad.imagenes.map(img => `<li><img src="${URL.createObjectURL(img)}" alt="Imagen" width="100" /></li>`).join('') : '<li>No hay imágenes</li>'}
                </ul>
            `;
            novedadElement.innerHTML = novedadHTML;
            contenedor.appendChild(novedadElement);
        });
    }
});
