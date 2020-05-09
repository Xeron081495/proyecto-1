
// obtengo el tamaño guardado de la grilla
let size = getSize();

//creo la grilla
crear();

//seteo el estilo de la grilla
setStyle();

//seteo el tamaño de la grilla
cambiarSize(size);

//seteo si muestra o no direcciones en pantalla
setDirecciones();



grilla.setCelda(2,0,0);
grilla.setCelda(4,0,1);
grilla.setCelda(8,0,2);
grilla.setCelda(16,0,3);
grilla.setCelda(32,1,3);
grilla.setCelda(64,1,2);
grilla.setCelda(128,1,1);
grilla.setCelda(256,1,0);
grilla.setCelda(512,2,0);
grilla.setCelda(2048,2,1);

// las proximas 4 funciones indican que movimientos hacer a la grilla (puede venir desde la parte tactil, flechas de teclado o swap en el celu)
function moverDerecha(){
    grilla.mover(new MovimientoDerecha(grilla));
    grilla.verificarPerdida();
}
function moverIzquierda(){
    grilla.mover(new MovimientoIzquierda(grilla));
    grilla.verificarPerdida();
}
function moverArriba(){
    grilla.mover(new MovimientoArriba(grilla));
    grilla.verificarPerdida();
}
function moverAbajo(){
    grilla.mover(new MovimientoAbajo(grilla));
    grilla.verificarPerdida();
}


//reinicia la grilla con la configuracion actual
function crear(){
    grilla = new Grid(size);
    grilla.puntaje = new Puntaje(grilla,0);
    grilla.grafica.reiniciar();
    grilla.agregarNuevo();
    grilla.agregarNuevo();
}

//cambia el tamaño de la grilla y gaurda la configuracion
function cambiarSize(n){
    size = n;
    modoNxN(n);
    crear();
    ocultarMenu();
    localStorage.setItem('size-grid',n);
}

//obtiene el tamaño guardado del localstorage. Por defecto es el 4x4.
function getSize(){
    const size = localStorage.getItem('size-grid');
    if(size==null){
        return 4;
    }else
        return +size;
}


//seteo el estilo de la grilla
function setStyle(){
    const style = localStorage.getItem('style-grid');
    if(style==null){
        modoClasico();
    }else{
        changeCss(style,0);
    }

}

//seteo si muestra o n odirecciones
function setDirecciones(){
    const dir = localStorage.getItem('direcciones');
    if(dir!=null && dir=='true'){
        mostrarTeclas();
    }

}
