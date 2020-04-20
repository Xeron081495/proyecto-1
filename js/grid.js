class Grid{
    grilla; //Matriz de tipo Celda 
    size; // number
    grafica; // clase de tipo Grafica
    save; // clase de tipo Save
    puntaje = 0;

    constructor(size){

        // seteo el tamaño de la grilla
        this.size = size;

        //creo la grafica del juego
        this.grafica = new Grafica(size,[2,4,8,16,32,64,128,256,512,1024,2048]);

        //crea la clase para guardar movimientos
        this.save = new Save(size,this.grafica);
        this.grilla = this.save.load();

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
    saveGame(){        
        this.save.save(this.grilla);
    }

    mover(movimiento){
        const huboMovimientos = movimiento.desplazar();
        const puntaje = movimiento.colisionar();
        if(huboMovimientos || puntaje>0){
            this.agregarNuevo();
            this.actualizarPuntaje(puntaje)
            //this.saveGame();
        }else{
            alert('No hay celdas a mover/colisionar');
        }
    }

    actualizarPuntaje(puntaje){
        this.puntaje+=puntaje;
        this.grafica.actualizarPuntaje(this.puntaje);
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
                const val = Math.floor(Math.random() * 4)+1;
                if(val>=0 && val<3)
                    this.setCeldaEfecto(2,fil,col); // 3 chances de 4 de que toque 2
                else
                    this.setCeldaEfecto(4,fil,col); // 3 chances de 4 de que toque 4
            }

            //conta
            if(cont==1000) esta = true;

        }

    }

} //GridClass

