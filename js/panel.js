window.onload = function() {
    // Determinar cuál es la concesión según la página
    const concesion = window.location.href.includes('san-cristobal') ? 'sanCristobal' : 'usaquen';

    // Obtener las novedades de localStorage para la concesión correspondiente
    const novedadesGuardadas = JSON.parse(localStorage.getItem(concesion)) || [];

    // Obtener el contenedor donde se mostrarán las novedades
    const listaNovedades = document.getElementById('novedades-list');
    listaNovedades.innerHTML = '';  // Limpiar la lista antes de mostrar

    // Mostrar las novedades
    novedadesGuardadas.forEach((novedad, index) => {
        const novedadDiv = document.createElement('div');
        novedadDiv.classList.add('novedad');
        novedadDiv.innerHTML = `
            <h3>${novedad.concesion}</h3>
            <p><strong>Novedad:</strong> ${novedad.novedad}</p>
            <p><strong>Imágenes:</strong> ${novedad.imagenes.join(', ')}</p>
            <button onclick="marcarRevisado(${index})">Marcar como Revisado</button>
        `;
        listaNovedades.appendChild(novedadDiv);
    });
};

// Marcar una novedad como revisada
function marcarRevisado(index) {
    const concesion = window.location.href.includes('san-cristobal') ? 'sanCristobal' : 'usaquen';
    const novedadesGuardadas = JSON.parse(localStorage.getItem(concesion)) || [];
    novedadesGuardadas[index].revisada = true;
    localStorage.setItem(concesion, JSON.stringify(novedadesGuardadas));
    alert('Novedad marcada como revisada');
    window.location.reload();  // Recargar para ver el cambio
}
