import { PaginationParams } from "./pagination-params.interface";

interface TablaMaestraParamsBase {
    idEmpresaSede: number;
    idTabla: number;

}

interface TablaMaestraListP extends TablaMaestraParamsBase, PaginationParams
{
    idColumna: number;
}

interface TablaMaestraDropDownP extends TablaMaestraParamsBase
{
}

interface TablaMaestraSave extends TablaMaestraParamsBase
{
    idColumna: number;
    valor: string;
    descripcion: string;
    idEstado: number;
    idUsuarioAuditoria: number;
    hostName: string;
}

interface TablaMaestraListParametroParams extends PaginationParams
{
    idEmpresaSede: number;
}

interface TablaMaestraListParametroCustomParams
{
    idEmpresaSede: number;
    idProyecto: number;
    idProceso: number;
}

export {
    TablaMaestraListP,
    TablaMaestraDropDownP,
    TablaMaestraSave,

    // Seguridad
    TablaMaestraListParametroParams,
    TablaMaestraListParametroCustomParams
}