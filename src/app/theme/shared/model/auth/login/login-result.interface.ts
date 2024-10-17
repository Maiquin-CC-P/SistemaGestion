interface LoginResult {
    usuarioLoginResults: UsuarioLoginResult;
    menuLoginResults: MenuLoginResult[];
    sedeLoginResults: SedeLoginResult[];
}

interface UsuarioLoginResult {
    idEmpresaSede: number;
    empresaSede: string;
    idUsuario: number;
    idPerfil: number;
    usuario: string;
    usuarioPersona: string;
    perfil: string;
}

interface MenuLoginResult {
    menuID: number;
    code: string;
    path: string;
    title: string;
    type: string;
    iconType: string;
    collapse: string;
    abbreviated: string;
    parentID: number;
}

interface SedeLoginResult {
    idEmpresaSede: number;
    empresaSede: string;
}

interface LoginProvicional {
    idUsuario: number;
    usuario: string;
    idPerfil: number;
    perfil: string;
    idEmpresaSede: number;
}

export {
    LoginResult,
    UsuarioLoginResult,
    MenuLoginResult,
    SedeLoginResult,

    LoginProvicional
}