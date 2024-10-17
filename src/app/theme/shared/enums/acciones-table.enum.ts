export enum AccionTable
{
    EDIT,
    DELETE,
    ITEMSELECT,
    
    // Acciones para Cambio Precio
    CONSULTAR,
    ESTADOSOLICITUD,
    REPLICARINFORMACION,
    DOWNLOAD,

    // Acciones SAP
    CONFIRMARCAMBIOS,
    RECHAZAR,
    VISUALIZAR,
    PROCESADOSAP,

    MARCARDESMARCAR,
    DOWNLOADXML,
}

export enum AccionFilter
{
    EXPORTEXCEL,
    EXPORTPDF,
    GUARDAR,
    MOSTAROCULTAR,
    LOADFILE,
    IMPORTFILE,
    QUITAR,
    COPIAR,
    // Acciones SAP
    CONFIRMARCAMBIOS,
    DESHACERCAMBIOS,
}