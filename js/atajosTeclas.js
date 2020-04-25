// verificar si apretas una tecla
document.onkeydown = checkKey;

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};  



function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            moverIzquierda();
        } else {
            moverDerecha();
        }                       
    } else {
        if ( yDiff > 0 ) {
            moverArriba();
        } else { 
            moverAbajo();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

                                              
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        moverArriba();
    }else if (e.keyCode == '40') {
        moverAbajo();
    }else if (e.keyCode == '37') {
        moverIzquierda();
    }else if (e.keyCode == '39') {
        moverDerecha();
    }

}