class Celda{
    valor; 

    /**
     * Inicializa el constructor
     * @param {number} valor valor de la celda: 2 4 8 16 32 64 128 256 512 1024 2048
     */
    constructor(valor){
        this.valor = valor;
    }

    getValor(){
        return this.valor;
    }

    setValor(valor){
        this.valor = valor;
    }

} //CellClass

class Grid{
    grilla;
    size;
    grafica;

    constructor(size){
        // seteo el tamaño de la grilla
        this.size = size;

        //seteo la grilla
        this.grilla = new Array(size);
        for (var i = 0; i < size; i++) {
            this.grilla[i] = new Array(size);
            for (var j = 0; j < size; j++)
                this.grilla[i][j] = null;
        }

        //creo la grafica del juego
        this.grafica = new Grafica();

        // creo la primer celda del juego
        this.setCelda(2,Math.floor(Math.random() * this.size),Math.floor(Math.random() * this.size));

    }

    getCell(x,y){
        return this.grilla[x][y];
    }
    setCelda(valor,x,y){
        this.grilla[x][y] = new Celda(valor);
        this.grafica.setCelda(valor,x,y);
    }
    getSize(){
        return this.size;
    }

} //GridClass

class Grafica{

    setCelda(valor,x,y){
        const idCelda = 'cell-'+x+'-'+y+'';
        document.getElementById(idCelda).innerText = valor;
        $('#'+idCelda).addClass('type-'+valor);
    }

} // GraficaClass


//creo la celda
const grilla = new Grid(4);

for (var i = 0; i < grilla.getSize(); i++) {
    for (var j = 0; j < grilla.getSize(); j++)
        console.log(grilla.getCell(i,j));
}