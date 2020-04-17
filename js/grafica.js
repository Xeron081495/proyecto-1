class Grafica{
    valores;

    constructor(valores){
        this.valores = valores;
    }

    deleteCelda(x,y){
        const idCelda = 'cell-'+x+'-'+y+'';
        document.getElementById(idCelda).innerText = '';
        for(let valor of this.valores)
            $('#'+idCelda).removeClass('type-'+valor);
    }
    setCelda(valor,x,y){
        const idCelda = 'cell-'+x+'-'+y+'';
        this.deleteCelda(x,y);
        document.getElementById(idCelda).innerText = valor;
        $('#'+idCelda).addClass('type-'+valor);
    }

} // GraficaClass
