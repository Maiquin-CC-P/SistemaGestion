import { Injectable } from '@angular/core';
import { LoginResult, UsuarioLoginResult } from '../../model/auth/login/login-result.interface';

// import { MenuListByUser, LoginResult } from '../../model/segurity/user/user-list.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setUser(data: LoginResult) {
    sessionStorage.setItem('currentUser', JSON.stringify(data));
  }  
  
  getUserLogin(): LoginResult | null{
    if (this.isAuth()) {
      const currentUserJson = sessionStorage.getItem('currentUser');
      if (currentUserJson) {
        const currentUser: LoginResult = JSON.parse(currentUserJson) as LoginResult;
        return currentUser;
      }
      return null;
    }
    else return null;
  }
  // setMenus(data: any) {
  //   sessionStorage.setItem('menus', JSON.stringify(data));
  // }
  // getMenus() {
  //   return JSON.parse(sessionStorage.getItem('menus'));
  // }
  getUser(): UsuarioLoginResult | null {
    if (this.isAuth()) {
      const currentUserJson = sessionStorage.getItem('currentUser');
      if (currentUserJson) {
        const currentUser: LoginResult = JSON.parse(currentUserJson) as LoginResult;
        return currentUser.usuarioLoginResults;
      }
      return null;
    }
    else return null;
    //  JSON.parse(sessionStorage.getItem('currentUser'));
  }

  // getAccess(codMenu: string): MenuListByUser {
  //   const _menus: MenuListByUser[] = this.getUserMenus();

  //   const _menu: MenuListByUser | undefined = _menus.find(x => x.codMenu == codMenu);
  //   const defaultMenu: MenuListByUser = {
  //     idEmpresaSede: 0,
  //     idUsuario: 0,
  //     idMenu: 0,
  //     codMenu: '',
  //     menu: '',
  //     flagRead: false,
  //     flagWrite: false,
  //     idEstado: 1
  //   }

  //   return _menu ? _menu : defaultMenu;
  // }

  // getUserMenus(): MenuListByUser[] {
  //   if (this.isAuth()) {
  //     const userCu: LoginResult | null = this.getUser();
  //     return userCu !== null ? userCu.menu : [];
  //   }
  //   else return [];
  //   //  JSON.parse(sessionStorage.getItem('currentUser'));
  // }



  getIdUser(): number {
    const user = this.getUser();
    return user ? user.idUsuario : 0;
  }

  getIdSede(): number {
    const user = this.getUser();
    return user ? user.idEmpresaSede : 0;
  }

  getIdPerfil(): number {
    const user = this.getUser();
    return user ? user.idPerfil : 0;
  }  
  
  getUserName(): string {
    const user = this.getUser();
    return user ? user.usuario : '';
  }

  getUserNameComplete(): string {
    const user = this.getUser();
    return user ? user.usuarioPersona : '';
  }

  // getHostName(): string {
  //   const cp = require('child_process');
  //   const os = require('os');
  //   switch (process.platform) {
  //     case "win32":
  //       return process.env.COMPUTERNAME;
  //     case "darwin":
  //       return cp.execSync("scutil --get ComputerName").toString().trim();
  //     case "linux":
  //       const prettyname = cp.execSync("hostnamectl --pretty").toString().trim();
  //       return prettyname === "" ? os.hostname() : prettyname;
  //     default:
  //       return os.hostname();
  //   }
  // }

  // getIdEmpresa(): number {
  //   const user = this.getUser();
  //   return user ? user.ide : 0;
  // }
  /*1 : administrador*/
  // isAdmin(): boolean {
  //   if (this.isAuth()) {
  //     const user = this.getUser();
  //     return user ? user.flagAdmin : false;
  //   }
  //   else return false;
  // }

  isAuth(): boolean {
    return sessionStorage.getItem('currentUser') ? true : false;
  }
  logout() {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("tblSolicitudMasivaMensaje");
  }
}
