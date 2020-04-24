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
    deleteCelda(x,y){
        const idCelda = 'cell-'+x+'-'+y+'';
        document.getElementById(idCelda).innerText = '';
        for(let valor of this.valores)
            $('#'+idCelda).removeClass('type-'+valor);
        $('#'+idCelda).removeClass('animated fadeIn');
    }
    setCelda(valor,x,y){
        const idCelda = 'cell-'+x+'-'+y+'';
        this.deleteCelda(x,y);
        document.getElementById(idCelda).innerText = valor;
        $('#'+idCelda).addClass('type-'+valor+'');
    }

    setCeldaEfecto(valor,x,y){
        this.setCelda(valor,x,y);
        const idCelda = 'cell-'+x+'-'+y+'';
        $('#'+idCelda).addClass('animated fadeIn');
    }

    /*efectoColision(x,y){
        const idCelda = 'cell-'+x+'-'+y+'';
        $('#'+idCelda).removeClass('animated');
        $('#'+idCelda).removeClass('animated shake');
        $('#'+idCelda).addClass('animated shake');
    }*/

    efectoColision(x,y){
        const celda = document.querySelector('#cell-'+x+'-'+y+'');
        celda.classList.add('animated', 'shake');
        setTimeout(function (){
            celda.classList.remove('animated', 'shake');
        },300);
    }


} // GraficaClass
