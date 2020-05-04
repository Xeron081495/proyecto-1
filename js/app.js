//creo la celda
let size = 4;
let grilla = new Grid(size);
grilla.puntaje = new Puntaje(grilla,0);
grilla.agregarNuevo();
grilla.agregarNuevo();


grilla.setCelda(2,0,0);
grilla.setCelda(4,0,1);
grilla.setCelda(8,0,2);
grilla.setCelda(16,0,3);
grilla.setCelda(32,1,3);
grilla.setCelda(64,1,2);
grilla.setCelda(128,1,1);
grilla.setCelda(256,1,0);
grilla.setCelda(512,2,0);
grilla.setCelda(1024,2,1);

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
function reiniciar(){
    grilla = new Grid(size);
    grilla.puntaje = new Puntaje(grilla,0);
    grilla.grafica.reiniciar();
    grilla.agregarNuevo();
    grilla.agregarNuevo();
}

function cambiarSize(n){
    size = n;
    this.modoNxN(n);
    this.reiniciar();
    this.ocultarMenu();
}