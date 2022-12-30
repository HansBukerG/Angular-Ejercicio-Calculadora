import { Egreso } from "./egreso.model";


export class EgresoServicio{
    egresos:Egreso[] = [
    ]

    eliminarEgreso(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}
