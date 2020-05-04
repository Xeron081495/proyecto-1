class Save{
    size = 4;
    partida = null;
    grafica = null;
    

    constructor(size,grafica){
        this.size = size;
        this.grafica = grafica;
    }

    /**
     * Retorna la grilla si existe, caso contrario retorna la grilla de restore
     */
    load(){
        const partida = localStorage.getItem('partida-'+this.size);
        if(partida!=null)
            this.partida = this.config(JSON.parse(partida));
        else
            this.partida = this.new();

        return this.partida;
    }

    config(partida){
        console.log(partida);
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++)
                console.log(partida[i][j]);
                if(partida[i][j]!=null){
                   partida[i][j] = new Celda(partida[i][j].valor,partida[i][j].fil,partida[i][j].col);
                   this.grafica.setCelda(partida[i][j].valor,partida[i][j].fil,partida[i][j].col);
                }
        }
        return partida;
    }

    /**
     * retorna una grilla vacia
     */
    new(){
        //seteo la grilla
        let partida = new Array(this.size);
        for (var i = 0; i < this.size; i++) {
            partida[i] = new Array(this.size);
            for (var j = 0; j < this.size; j++)
                partida[i][j] = null;
        }
        return partida;
    }

    /**
     * 
     * @param {array<array<Celda<Celda>>} partida grilla a guardar 
     */

    save(partida){
        this.last_move = this.load();
        localStorage.setItem('partida-'+this.size,JSON.stringify(partida));
        localStorage.setItem('last_move-'+this.size,JSON.stringify(this.load()));
        this.partida = partida;
    }
}