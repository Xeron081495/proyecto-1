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
    console.log(e.keyCode);
    e = e || window.event;
    if (e.keyCode == '38') {
        moverArriba();
    }else if (e.keyCode == '40') {
        moverAbajo();
    }else if (e.keyCode == '37') {
        moverIzquierda();
    }else if (e.keyCode == '39') {
        moverDerecha();
    }else if(e.keyCode == '65' || e.keyCode == '97'){
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
    }

}
