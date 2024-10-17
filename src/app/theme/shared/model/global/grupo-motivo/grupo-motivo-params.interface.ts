import { PaginationParams } from "../pagination-params.interface";

interface GrupoMotivoListParams extends PaginationParams
{
    idEmpresaSede: number;
}

export {
    GrupoMotivoListParams
}