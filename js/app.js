document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let concesion = document.getElementById('concesion').value;
    let novedad = document.getElementById('novedad').value;
    let imagenes = document.getElementById('imagenes').files;

    console.log('Concesión:', concesion);
    console.log('Novedad:', novedad);
    console.log('Imágenes:', imagenes);
});
