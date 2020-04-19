
class MovimientoAbajo extends Movimiento{

    desplazar(){
        let cambio = false; 

        for(let col=0; col<this.grid.size; col++){
            let pos = this.grid.size-1;
            let seguir = true;

            while(pos>=0 && seguir)

                // busco un elemento mas adelante para poner en el nulo
                if(this.grid.getCelda(pos,col)==null){

                    let listo = false;
                    let cursor = pos;

                    //busco el elemento
                    while(!listo && cursor>=0)

                        //encontre el elemento
                        if(this.grid.getCelda(cursor,col) != null)
                            listo = true;
                        // sig buscando
                        else
                            cursor--;                     
                    

                    //si listo es true, intercambio el nulo por la celda encontrada
                    if(listo){
                        this.intercambiar(this.grid.getCelda(cursor,col),this.grid.getCelda(pos,col),pos,col);
                        pos--;
                        cambio = true;
                    // no hay un elemento adelante, asi que termino y cambio de fila
                    }else
                        seguir = false;                    

                //avanzo al siguiente por este ya está    
                }else
                    pos--;
        }
        return cambio;
    }

    colisionar(){
        let cambio = false;
        for(let c=0; c<this.grid.size; c++)
            for(let f=this.grid.size-1; f>0; f--)
                if(this.combinar(this.grid.getCelda(f-1,c),this.grid.getCelda(f,c),f,c)) {
                    cambio = true;
                    this.desplazar();
                } 
        return cambio;
    }
}

