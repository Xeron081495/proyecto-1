


class Movimiento{
    grid;

    constructor(grid){
        this.grid = grid;
    }


    /**
     * Fuciona dos celdas en una si su valor es igual y no son nulas
     * @param {*} celda1 Esta celda va a quedar nula al sumar su valor a celda2 
     * @param {*} celda2 En esta celda se suma el valor de celda1 y celda 2.
     */
    combinar(celda1, celda2, fil, col){
        if(celda1!=null && celda2!=null){
            if(celda1.getValor()==celda2.getValor()){
                const valor = celda1.getValor()*2;
                this.grid.setCelda(valor,fil,col);
                this.grid.deleteCelda(celda1.getFila(),celda1.getCol());
                this.grid.grafica.efectoColision(fil,col);
                return valor;
            }
        }
        return 0;
    }
    
    /**
     * Intercambia la posicion de dos celdas si celda 1 no es nula y celda2 es nula
     * @param {*} celda1 celda no nula a dejar en nulo
     * @param {*} celda2 celda nula donde va a estar la celda1 
     * @param {*} fila indica la fila donde iria la celda a intercambiar
     * @param {*} col indica lacolumna donde iria la celda a intercambiar
     */
    intercambiar(celda1, celda2,fil,col){
        if(celda1!=null && celda2==null){
            this.grid.deleteCelda(celda1.getFila(),celda1.getCol());
            this.grid.setCelda(celda1.getValor(),fil,col);
            return true;
        }
        return false;
    }


}