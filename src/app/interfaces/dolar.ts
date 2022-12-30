import { IndicadorMonetario } from "./indicador-monetario"

export interface Dolar {
    version:string
    autor:string
    fecha:Date
    indicador_monetario:Array<IndicadorMonetario>
};
