interface GrupoMotivoListResult {
    idTabla: number;
    idColumna: number;
    idGrupoPadre: number;
    grupoPadre: string;
    grupoMotivo: string;
    totalElements: number;

    detalle: GrupoMotivoListResult[];
    flagView: boolean;
}

export {
    GrupoMotivoListResult
}