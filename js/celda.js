class Celda{
    valor; 
    fil;
    col;

    /**
     * Inicializa el constructor
     * @param {number} valor valor de la celda: 2 4 8 16 32 64 128 256 512 1024 2048
     * @param {number} fil fila en grilla
     * @param {number} col columna en grilla
     */
    constructor(valor, x, y){
        this.valor = valor;
        this.fil = x;
        this.col = y;
    }

    getValor(){
        return this.valor;
    }
    getFila(){
        return this.fil;
    }
    getCol(){
        return this.col;
    }
    setValor(valor){
        this.valor = valor;
    }
    setPos(x,y){
        this.fil = x;
        this.col = y;
    }
    setFila(fila){
        this.fila = fila;
    }
    setCol(col){
        this.col = col;
    }

    clone(){
        return new Celda(this.getValor(),this.getFila(),this.getCol());
    }

} //CellClass
