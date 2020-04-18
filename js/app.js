//creo la celda
const grilla = new Grid(4);

function moverDerecha(){
    grilla.mover(new MovimientoDerecha(grilla));
}
function moverIzquierda(){
    grilla.mover(new MovimientoIzquierda(grilla));
}
function moverArriba(){
    grilla.mover(new MovimientoArriba(grilla));
}
function moverAbajo(){
    grilla.mover(new MovimientoAbajo(grilla));
}


