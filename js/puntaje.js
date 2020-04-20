class Puntaje{
    puntaje = 0;
    record;
    grilla;

    constructor(grilla,puntaje){
        this.grilla = grilla;
        this.actualizar(puntaje);
        this.verificarRecord();
    }
    

    actualizar(puntaje){
        console.log(this.puntaje);
        this.puntaje+=puntaje;
        this.grilla.grafica.actualizarPuntaje(this.puntaje);
        this.verificarRecord();
    }

    verificarRecord(){
        this.record = localStorage.getItem('record-'+this.grilla.size);

        //verificar record
        if(this.record==null){
            this.record = 0;
        }else if((+this.record)<this.puntaje){
            this.record = this.puntaje;
        }

        localStorage.setItem('record-'+this.grilla.size,this.record);
        this.grilla.grafica.actualizarRecord(this.record);

    }

}