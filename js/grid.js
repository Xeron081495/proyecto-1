class Grid{
    grilla; //Matriz de tipo Celda 
    size; // number
    grafica; // clase de tipo Grafica
    save; // clase de tipo Save
    puntaje; //clas que controla puntajes

    constructor(size){

        // seteo el tamaño de la grilla
        this.size = size;

        //creo la grafica del juego
        this.grafica = new GraficaActiva(size,[2,4,8,16,32,64,128,256,512,1024,2048]);

        //crea la clase para guardar movimientos
        this.save = new Save(size,this.grafica);
        this.grilla = this.save.load();

        //crea clase puntaje
        this.puntaje = new Puntaje(this,0);
    }

    getCelda(x,y){
        return this.grilla[x][y];
    }
    setCelda(valor,x,y){
        this.grilla[x][y] = new Celda(valor,x,y);
        this.grafica.setCelda(valor,x,y);
        if(valor==2048)
            console.log('ganaste');
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
        const huboMovimientos = movimiento.desplazar(true);
        const puntaje = movimiento.colisionar(true);
        if(huboMovimientos || puntaje>0){
            this.agregarNuevo();
            this.puntaje.actualizar(puntaje);
        }else{
            // no hacer nada
        }
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
                const val = Math.floor(Math.random() * 6)+1;
                if(val>=0 && val<5)
                    this.setCeldaEfecto(2,fil,col); // 3 chances de 4 de que toque 2
                else
                    this.setCeldaEfecto(4,fil,col); // 3 chances de 4 de que toque 4
            }

            //conta
            if(cont==1000) esta = true;

        }

    }

    /**
     * Le pasas una grilla y la compara para ver si son iguales
     * @param {*} grid 
     */
    compareTo(grid){
        var igual = true;
        var i=0;
        while(i<this.size && igual){
            var j=0;
            while(j<this.size && igual){
                igual = this.getCelda(i,j)!=null && grid.getCelda(i,j)!=null && this.getCelda(i,j).valor==grid.getCelda(i,j).valor;
                j++;
            }
            i++;
        }
        return igual;
    }

    clone(){
        let aux = new Grid(this.size);
        var i=0;
        while(i<this.size){
            var j=0;
            while(j<this.size){
                const celda = this.getCelda(i,j);
                if(celda!=null)
                    aux.setCelda(celda.valor,i,j);
                j++;
            }
            i++;
        }
        return aux;
    }  

    /**
     * Verifica que el jugador pueda segui jugando
     */
    verificarPerdida(){
        if(this.grillaLlena()){
            let aux = this.clone();
            aux.grafica = new GraficaInactiva();
            //simulo movimiento a derecha
            aux.mover(new MovimientoDerecha(aux));
            if(aux.compareTo(this)){
                //simulo movimiento a izquierda
                aux.mover(new MovimientoIzquierda(aux));
                if(aux.compareTo(this)){
                    //simulo movimiento a abajo
                    aux.mover(new MovimientoAbajo(aux));
                    if(aux.compareTo(this)){                   
                        //simulo movimiento a arriba
                        aux.mover(new MovimientoArriba(aux));
                        if(aux.compareTo(this))
                            console.log("perdiste");   
                            this.grafica.setPerdida();
                    }
                }  
            }
        }
    }

    grillaLlena(){
        var ninguna = true;
        var i=0;
        while(i<this.size && ninguna){
            var j=0;
            while(j<this.size && ninguna){
                ninguna = this.getCelda(i,j)!=null;
                j++;
            }
            i++;
        }
        return ninguna;
    }

} //GridClass
