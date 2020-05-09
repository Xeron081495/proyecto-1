class GraficaActiva{
    valores;
    size;

    constructor(size,valores){
        this.valores = valores;
        this.size = size;
        this.agregarCeldas();
    }


    /**
     * Agregar las celdas a la pantalla depediendo del tamaño de la grilla
     */
    agregarCeldas(){       

        // obtengo las filas de la grilla
        let filas = document.getElementById('grid-container').getElementsByClassName('grid-row');

        // elimino las filas si es que existen
        const n = filas.length;
        for(let i=0; i<n; i++){
            filas[0].remove();
        }

        // agregar las nuevas celdas
        for(let i=0; i<this.size;i++){
            var fila = document.createElement("div");
            fila.classList.add('grid-row');
            for(let j=0; j<this.size;j++){
                var celda = document.createElement("div");
                celda.classList.add('grid-cell');
                celda.setAttribute('id', 'cell-'+i+'-'+j+'');
                fila.appendChild(celda);
            }
            document.getElementById('grid-container').appendChild(fila);
        }
    }


    //a actualiza el puntaje actual
    actualizarPuntaje(puntaje){
        document.getElementById('puntaje-actual').classList.add('animated', 'fadeOutUp');
        setTimeout(function (){
            document.getElementById('puntaje-actual').classList.remove('animated',  'fadeOutUp');
            document.getElementById('puntaje-actual').innerText = puntaje;
            //document.getElementById('puntaje-actual').classList.add('animated',  'fadeInDown');
        },800);
    }

    // Actualiza el record en pantalla
    actualizarRecord(puntaje){
        document.getElementById('puntaje-record').innerText = puntaje;
    }

    // elimina una celda
    deleteCelda(x,y){
        let celda = this.getCelda(x,y);
        celda.innerText = '';
        for(let valor of this.valores)
            celda.classList.remove('type-'+valor);
    }

    // setea una celda en la pos (x,y) cun un valor
    setCelda(valor,x,y){
        let celda = this.getCelda(x,y);
        this.deleteCelda(x,y);
        celda.innerText = valor;
        celda.classList.add('type-'+valor+'');
    }

    //setea una celda con el efecto face in
    setCeldaEfecto(valor,x,y){
        this.setCelda(valor,x,y);
        let celda = this.getCelda(x,y);
        this.setEfecto(celda,'fadeIn');
    }

    // genera el efecto de colision en una celda
    efectoColision(x,y){
        let celda = this.getCelda(x,y);
        this.setEfecto(celda,'shake');
    }

    // Retorna el div de la celda en x:y
    getCelda(x,y){
        return document.querySelector('#cell-'+x+'-'+y+'');
    }

    // agrega el efecto de animate css y 300ms lo saca para que pueda ser usado nuevamente 
    setEfecto(celda,efecto){        
        celda.classList.add('animated', efecto);
        setTimeout(function (){
            celda.classList.remove('animated', efecto);
        },300);
    }

    //mostrar mensaje de que perdio
    setPerdida(){
        let mensaje = document.querySelector('#mensaje');
        mensaje.classList.remove('d-none');
        mensaje.classList.remove('animated', 'fadeOut');
        mensaje.classList.add('animated', 'fadeIn');
    }

    //mostrar mensaje de que perdio y ajustar header para compartir
    setGanado(){
        let mensaje = document.querySelector('.ganaste');
        mensaje.classList.remove('d-none');
        mensaje.classList.remove('animated', 'fadeOut');
        mensaje.classList.add('animated', 'fadeIn');
    }

    //mostrar mensaje de que perdio
    reiniciar(){
        let mensaje = document.querySelector('#mensaje');
        let ganaste = document.querySelector('.ganaste');
        mensaje.classList.add('d-none');
        ganaste.classList.add('d-none');
        mensaje.classList.remove('animated', 'fadeIn', 'fadeOut');
        mensaje.classList.add('animated', 'fadeOut');
        ganaste.classList.remove('animated', 'fadeIn', 'fadeOut');
        ganaste.classList.add('animated', 'fadeOut');
        for(let i=0; i<this.size;i++)
            for(let j=0; j<this.size;j++)
                this.deleteCelda(i,j);
    }


} // GraficaClass


class GraficaInactiva{

    //a actualiza el puntaje actual
    actualizarPuntaje(puntaje){ }

    // Actualiza el record en pantalla
    actualizarRecord(puntaje){ }

    // elimina una celda
    deleteCelda(x,y){ }

    // setea una celda en la pos (x,y) cun un valor
    setCelda(valor,x,y){ }

    //setea una celda con el efecto face in
    setCeldaEfecto(valor,x,y){ }

    // genera el efecto de colision en una celda
    efectoColision(x,y){ }

    // Retorna el div de la celda en x:y
    getCelda(x,y){
        return document.querySelector('#cell-'+x+'-'+y+'');
    }
}