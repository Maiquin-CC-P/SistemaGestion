interface PaginationParams {
    search: string;
    idEstado: number;
    pageIndex: number;
    pageSize: number;
}

interface PaginationParamsES {
    buscar: string;
    indice: number;
    cantidad: number;
}

export {
    PaginationParams,
    PaginationParamsES
}