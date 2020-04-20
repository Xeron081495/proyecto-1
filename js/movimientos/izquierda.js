
class MovimientoIzquierda extends Movimiento{

    desplazar(){
        let cambio = false; 

        for(let fila=0; fila<this.grid.size; fila++){
            let pos = 0;
            let seguir = true;

            while(pos<this.grid.size && seguir)

                // busco un elemento mas adelante para poner en el nulo
                if(this.grid.getCelda(fila,pos)==null){

                    let listo = false;
                    let cursor = pos;

                    //busco el elemento
                    while(!listo && cursor<this.grid.size)

                        //encontre el elemento
                        if(this.grid.getCelda(fila,cursor) != null)
                            listo = true;
                        // sig buscando
                        else
                            cursor++;                     
                    

                    //si listo es true, intercambio el nulo por la celda encontrada
                    if(listo){
                        this.intercambiar(this.grid.getCelda(fila,cursor),this.grid.getCelda(fila,pos),fila,pos);
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
        for(let f=0; f<this.grid.size; f++)
            for(let c=0; c<this.grid.size-1; c++){
                const puntaje = this.combinar(this.grid.getCelda(f,c+1),this.grid.getCelda(f,c),f,c);
                if(puntaje>0){
                    this.desplazar();
                    puntaje_total+=puntaje;
                }
            }
        return puntaje_total;
}

}

