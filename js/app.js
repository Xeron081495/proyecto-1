//creo la celda
const size = 4;
let grilla = new Grid(size);
grilla.puntaje = new Puntaje(grilla,0);
grilla.agregarNuevo();
grilla.agregarNuevo();


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