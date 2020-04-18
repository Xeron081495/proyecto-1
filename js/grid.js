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
        this.grafica = new Grafica([2,4,8,16,32,64,128,256,512,1024,2048]);

        // creo la primer celda del juego
        this.agregarNuevo();
        this.agregarNuevo();
    }

    getCelda(x,y){
        return this.grilla[x][y];
    }
    setCelda(valor,x,y){
        this.grilla[x][y] = new Celda(valor,x,y);
        this.grafica.setCelda(valor,x,y);
    }
    setCeldaEfecto(valor,x,y){
        this.grilla[x][y] = new Celda(valor,x,y);
        this.grafica.setCeldaEfecto(valor,x,y);
    }
    deleteCelda(x,y){
        this.grilla[x][y] = null;
        this.grafica.deleteCelda(x,y);
    }
    getSize(){
        return this.size;
    }   

    mover(movimiento){
        movimiento.desplazar();
        movimiento.colisionar();
        this.agregarNuevo();
    }
    
    /**
     * Agrega una celda en un lugar vacio de la grilla
     */
    agregarNuevo(){
        let esta = false;
        let cont = 0;
        
        while(!esta){
            cont++;
            const fil = Math.floor(Math.random() * this.size);
            const col = Math.floor(Math.random() * this.size);

            if(this.getCelda(fil,col)==null){
                esta = true;
                const val = Math.floor(Math.random() * 2)+1;
                this.setCeldaEfecto(val*2,fil,col);
            }

            if(cont==1000) esta = true;

        }

    }

} //GridClass

