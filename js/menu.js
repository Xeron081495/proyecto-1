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
    localStorage.setItem('style-grid','css/color.css');
    this.changeCss('css/color.css',0);
    this.ocultarMenu();
}

function modoOscuro(){
    localStorage.setItem('style-grid','css/color-black.css');
    this.changeCss('css/color-black.css',0);
    this.ocultarMenu();
}
function modoExtremo(){
    this.changeCss('css/color-extremo.css',0);
    localStorage.setItem('style-grid','css/color-extremo.css');
    this.ocultarMenu();
}

function modoNxN(n){
    this.changeCss('css/grid'+n+'x'+n+'.css',1);
    this.ocultarMenu();
}

function changeCss(ruta,lugar){
    var oldCss = document.getElementsByTagName("link").item(lugar);
    var newCss = document.createElement("link");
    newCss.setAttribute("rel", "stylesheet");
    newCss.setAttribute("type", "text/css");
    newCss.setAttribute("href", ruta);
    document.getElementsByTagName("head").item(0).replaceChild(newCss, oldCss);
}

function mostrarTeclas(){
    const menu = document.querySelector('.controls');
    localStorage.setItem('direcciones',true);
    menu.classList.remove('d-none');
    this.ocultarMenu();
}

function ocultarTeclas(){
    const menu = document.querySelector('.controls');
    localStorage.setItem('direcciones',false);
    menu.classList.add('d-none');
    this.ocultarMenu();
}