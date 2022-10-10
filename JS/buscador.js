const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('buscador')){
    const buscador = urlParams.get('buscador').toLowerCase();
    const productos = document.querySelectorAll('.producto');
    productos.forEach((producto) => {
        let nombre_producto = producto.querySelector('.tit_prod').innerHTML;
        nombre_producto = nombre_producto.toLowerCase();
        if(!nombre_producto.includes(buscador)){
            producto.style.display = 'none';
        }
    })
}