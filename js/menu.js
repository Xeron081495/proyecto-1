function abrirMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.remove('d-none','animated','slideOutLeft');
    menu.classList.add('animated','slideInLeft');
}

function ocultarMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.add('animated','slideOutLeft');
}

function modoClasico(){
    this.ocultarMenu();
    this.changeCss('css/color.css');
}

function modoOscuro(){
    this.ocultarMenu();
    this.changeCss('css/color-black.css');
}
function modoExtremo(){
    this.ocultarMenu();
    this.changeCss('css/color-extremo.css');
}

function changeCss(ruta){
    var oldCss = document.getElementsByTagName("link").item(0);
    var newCss = document.createElement("link");
    newCss.setAttribute("rel", "stylesheet");
    newCss.setAttribute("type", "text/css");
    newCss.setAttribute("href", ruta);
    document.getElementsByTagName("head").item(0).replaceChild(newCss, oldCss);
}

function mostrarTeclas(){
    const menu = document.querySelector('.controls');
    menu.classList.remove('d-none');
    this.ocultarMenu();
}

function ocultarTeclas(){
    const menu = document.querySelector('.controls');
    menu.classList.add('d-none');
    this.ocultarMenu();
}