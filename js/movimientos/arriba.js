
class MovimientoArriba extends Movimiento{

    desplazar(){
        let cambio = false; 

        for(let col=0; col<this.grid.size; col++){
            let pos = 0;
            let seguir = true;

            while(pos<this.grid.size && seguir)

                // busco un elemento mas adelante para poner en el nulo
                if(this.grid.getCelda(pos,col)==null){

                    let listo = false;
                    let cursor = pos;

                    //busco el elemento
                    while(!listo && cursor<this.grid.size)

                        //encontre el elemento
                        if(this.grid.getCelda(cursor,col) != null)
                            listo = true;
                        // sig buscando
                        else
                            cursor++;                     
                    

                    //si listo es true, intercambio el nulo por la celda encontrada
                    if(listo){
                        this.intercambiar(this.grid.getCelda(cursor,col),this.grid.getCelda(pos,col),pos,col);
                        pos++;
                        cambio = true;
                    // no hay un elemento adelante, asi que termino y cambio de fila
                    }else
                        seguir = false;                    

                //avanzo al siguiente por este ya está    
                }else
                    pos++;
        }
        return cambio;
    }

    colisionar(){
        let puntaje_total = 0;
        for(let c=0; c<this.grid.size; c++)
            for(let f=0; f<this.grid.size-1; f++){
                const puntaje = this.combinar(this.grid.getCelda(f+1,c),this.grid.getCelda(f,c),f,c);
                if(puntaje>0){
                    this.desplazar();
                    puntaje_total+=puntaje;
                }
            }
        return puntaje_total;
    }

}

