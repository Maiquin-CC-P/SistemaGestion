import { Auditoria } from "./auditoria.iterface";

interface TablaMaestraResultBase {
    idTable: number;
    idColumna: number;
    valor: string;
    descripcion: string;
    idEstado: number;
    idColumnaPadre: number;
}

interface TablaMaestraList extends TablaMaestraResultBase, Auditoria {
    estado: string;
}

interface TablaMaestraCombo extends TablaMaestraResultBase {

}

interface TablaMaestraListParametroResult {
    idTabla: number;
    idColumna: number;
    grupoTabla: string;
    valor: string;
    descripcion: string;
    usuarioCreacion: string;
    fechaCreacion: string;
    idFila: number;
    usuarioModificacion: string;
    fechaModificacion: string;
    totalElements: number;
    
    flagView: boolean;
    detalle: TablaMaestraListParametroResult[];
}

interface TablaMaestraParametroCustomResult extends Auditoria
{
    idEstadoApertura: number;
    idFila: number;
    idTabla: number;
    idColumna: number;
    valor: string;
    descripcion: string;
}

export {
    TablaMaestraList,
    TablaMaestraCombo,

    TablaMaestraListParametroResult,
    TablaMaestraParametroCustomResult
}