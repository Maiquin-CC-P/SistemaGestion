interface LoginParams {
    idEmpresa: number;
    idEmpresaSede: number;
    usuario: string;
    clave: string;
    idProyecto: number;
    tipoAut: TipoAutenticacion
}

enum TipoAutenticacion {
    LoginAD = 1,
    Login = 2
}

interface LoginTipoURL {
    tipo: number;
}

export {
    LoginParams,
    TipoAutenticacion,
    LoginTipoURL
}