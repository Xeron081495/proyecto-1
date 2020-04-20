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

} // GraficaClass
