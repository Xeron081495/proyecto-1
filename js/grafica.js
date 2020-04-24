class Grafica{
    valores;
    size;

    constructor(size,valores){
        this.valores = valores;
        this.size = size;
    }

    actualizarPuntaje(puntaje){
        document.getElementById('puntaje-actual').innerText = puntaje;
    }

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


} // GraficaClass
