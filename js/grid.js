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

        console.log("------ empieza matriz ------"); 
        for(let i=0; i<this.size; i++){
            console.log("------ fila ------"); 
            for(let j=0; j<this.size; j++){
                console.log(this.grilla[i][j]); 
            }
        }
        console.log("--------fin matriz---------"); 

    }
    deleteCelda(x,y){
        this.grilla[x][y] = null;
        this.grafica.deleteCelda(x,y);
    }
    getSize(){
        return this.size;
    }   

    moverDerecha(){
        this.desplazarDer();
        this.colisionarDer();
        this.agregarNuevo();
    }
    moverIzquierda(){
        this.desplazarIzq();
        this.colisionarIzq();
        this.agregarNuevo();
    }
    moverArriba(){
        this.desplazarArr();
        this.colisionarArr();
        this.agregarNuevo();
    }
    moverAbajo(){
        this.desplazarAbj();
        this.colisionarAbj();
        this.agregarNuevo();
    }

    
    desplazarDer(){
        for(let f=0; f<this.size; f++)
            for(let c=0; c<this.size-1; c++)
                this.intercambiar(this.getCelda(f,c),this.getCelda(f,c+1),f,c+1);
    }

    colisionarDer(){
        for(let f=0; f<this.size; f++)
            for(let c=this.size-1; c>0; c--)
                if(this.colAux(this.getCelda(f,c-1),this.getCelda(f,c),f,c)) 
                    this.desplazarDer();
    }  
    
    desplazarAbj(){
        for(let c=0; c<this.size; c++)
            for(let f=0; f<this.size-1; f++)
                this.intercambiar(this.getCelda(f,c),this.getCelda(f+1,c),f+1,c);
    }

    colisionarAbj(){
        for(let c=0; c<this.size; c++)
            for(let f=this.size-1; f>0; f--)
                if(this.colAux(this.getCelda(f-1,c),this.getCelda(f,c),f,c)) 
                    this.desplazarAbj();
    }  
    
    desplazarIzq(){
        for(let f=0; f<this.size; f++)
            for(let c=this.size-1; c>0; c--)
                this.intercambiar(this.getCelda(f,c),this.getCelda(f,c-1),f,c-1);
    }

    colisionarIzq(){
        for(let f=0; f<this.size; f++)
            for(let c=0; c<this.size-1; c++)
                if(this.colAux(this.getCelda(f,c+1),this.getCelda(f,c),f,c)) 
                    this.desplazarIzq();
    }

    desplazarArr(){  
        for(let c=0; c<this.size; c++)
            for(let f=this.size-1; f>0; f--)
                this.intercambiar(this.getCelda(f,c),this.getCelda(f-1,c),f-1,c);
    }

    colisionarArr(){
        for(let c=0; c<this.size; c++)
            for(let f=0; f<this.size-1; f++)
                if(this.colAux(this.getCelda(f+1,c),this.getCelda(f,c),f,c)) 
                    this.desplazarArr();
    }

    /**
     * Fuciona dos celdas en una si su valor es igual y no son nulas
     * @param {*} celda1 Esta celda va a quedar nula al sumar su valor a celda2 
     * @param {*} celda2 En esta celda se suma el valor de celda1 y celda 2.
     */
    colAux(celda1, celda2, fil, col){
        if(celda1!=null && celda2!=null){
            if(celda1.getValor()==celda2.getValor()){
                this.setCelda(celda1.getValor()*2,fil,col);
                this.deleteCelda(celda1.getFila(),celda1.getCol());
                return true;
            }
        }
        return false;
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
            this.deleteCelda(celda1.getFila(),celda1.getCol());
            this.setCelda(celda1.getValor(),fil,col);
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
                const val = Math.floor(Math.random() * 2)+1;
                this.setCelda(val*2,fil,col);
                console.log("Nuevo en "+(fil+1)+":"+(col+1));
            }

            if(cont==1000) esta = true;

        }

    }

} //GridClass

