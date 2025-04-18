document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const concesion = document.getElementById("concesion").value;
    const novedad = document.getElementById("novedad").value;
    const imagenes = document.getElementById("imagenes").files;

    // Crea un objeto para guardar la novedad
    const novedadObj = {
        concesion: concesion,
        novedad: novedad,
        imagenes: Array.from(imagenes) // Convierte las imágenes a un array
    };

    // Guarda la novedad en el almacenamiento local
    let novedades = JSON.parse(localStorage.getItem("novedades")) || [];
    novedades.push(novedadObj);
    localStorage.setItem("novedades", JSON.stringify(novedades));

    alert("Novedad enviada correctamente");
});
