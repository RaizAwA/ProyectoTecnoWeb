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

const action = (elem, text) => {
    let radios = elem.querySelectorAll('input[type="checkbox"]');
    radios.forEach((radio) => {
        radio.checked = false;
    })
    
    let divs = elem.querySelectorAll('div');
    divs.forEach((div) => {
        if(div.id == text){
            div.hidden = false;
        }else{
            div.hidden = true;
        }
    })
};

const radios = document.querySelectorAll('input[name="category"]');
radios.forEach((radio) =>{
    radio.addEventListener('click', () => {
        let opciones = document.getElementById('opciones');
        action(opciones, radio.value);
    });
})