//creo la celda
const grilla = new Grid(4);

// verificar si apretas una tecla
document.onkeydown = checkKey;




function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        moverAbajo();
    }else if (e.keyCode == '40') {
        moverAbajo();
    }else if (e.keyCode == '37') {
        moverIzquierda();
    }else if (e.keyCode == '39') {
        moverDerecha();
    }

}

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


