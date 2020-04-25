class GraficaActiva{
    valores;
    size;

    constructor(size,valores){
        this.valores = valores;
        this.size = size;
    }


    //a actualiza el puntaje actual
    actualizarPuntaje(puntaje){
        document.getElementById('puntaje-actual').innerText = puntaje;
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

    //mostrar mensaje de que perdio
    reiniciar(){
        let mensaje = document.querySelector('#mensaje');
        mensaje.classList.remove('animated', 'fadeIn');
        mensaje.classList.remove('animated', 'fadeOut');
        mensaje.classList.add('animated', 'fadeOut');
        for(let i=0; i<this.size;i++)
            for(let j=0; j<this.size;j++)
                this.deleteCelda(i,j);
    }


} // GraficaClass


class GraficaInactiva{

    //a actualiza el puntaje actual
    actualizarPuntaje(puntaje){
    }

    // Actualiza el record en pantalla
    actualizarRecord(puntaje){
    }

    // elimina una celda
    deleteCelda(x,y){
    }

    // setea una celda en la pos (x,y) cun un valor
    setCelda(valor,x,y){
    }

    //setea una celda con el efecto face in
    setCeldaEfecto(valor,x,y){
    }

    // genera el efecto de colision en una celda
    efectoColision(x,y){
    }

    // Retorna el div de la celda en x:y
    getCelda(x,y){
        return document.querySelector('#cell-'+x+'-'+y+'');
    }
}