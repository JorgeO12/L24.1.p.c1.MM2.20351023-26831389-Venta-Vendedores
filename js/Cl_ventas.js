export default class Cl_ventas{
    constructor(){
        this.mayorista = 0
        this.minorista = 0
        this.mayorVenta = 0
        this.ventamayorista = 0

    }

    procesar(p){
        if (p.tipo == 1){
            this.mayorista += p.monto
            this.ventamayorista += p.monto
            p.monto > this.mayorVenta ? this.mayorVenta = p.monto : this.mayorVenta
            
        }
        else if (p.tipo == 2){
            this.minorista += p.monto
        }
      
    
    }

    mayorventa (){
        return this.mayorVenta
    }

    totalvmayorista (){
        return this.ventamayorista
    }
}