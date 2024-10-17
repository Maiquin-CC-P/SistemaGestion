interface Auditoria {
    idEstado: number;
    estado: string;
    usuarioCreacion: string;
    fechaCreacion: string;
    hostCreacion: string;
    usuarioModificacion: string;
    fechaModificacion: string;
    hostModificacion: string;
    totalElements: number;
}

interface AuditoriaParams {
    idEmpresaSede: number;
    idEstado: number;
    idUsuarioAuditoria: number;
    hostName: string;
}

export {
    Auditoria,
    AuditoriaParams
}