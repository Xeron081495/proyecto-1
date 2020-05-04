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
    this.changeCss('css/color.css',0);
    this.ocultarMenu();
}

function modoOscuro(){
    this.changeCss('css/color-black.css',0);
    this.ocultarMenu();
}
function modoExtremo(){
    this.changeCss('css/color-extremo.css',0);
    this.ocultarMenu();
}

function modo3x3(){
    this.changeCss('css/grid3x3.css',1);
    this.ocultarMenu();
}
function modo4x4(){
    this.changeCss('css/grid3x3.css',1);
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
    menu.classList.remove('d-none');
    this.ocultarMenu();
}

function ocultarTeclas(){
    const menu = document.querySelector('.controls');
    menu.classList.add('d-none');
    this.ocultarMenu();
}