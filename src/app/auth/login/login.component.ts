import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginForm } from 'src/app/theme/shared/model/auth/login/login';
import { LoginProvicional, LoginResult, UsuarioLoginResult } from 'src/app/theme/shared/model/auth/login/login-result.interface';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UsuarioData } from './smock/usuario-data';
import { SessionService } from 'src/app/theme/shared/service/global/session.service';
import { Utils } from 'src/app/theme/shared/helpers/utils';
import { LoginTipoURL } from 'src/app/theme/shared/model/auth/login/login-params.interface';
import { InputGroupComponent } from "../../theme/shared/components/input-group/input-group.component";
import { CambioPrecioData } from './smock/menu-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule, InputGroupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup<LoginForm>;
  submitted: boolean = false;
  optUsuario: LoginProvicional[] = UsuarioData;
  tipoURL!: LoginTipoURL;
  userLogin!: LoginResult;
  idEmpresaSede: number = 1;

  typeT: string = 'password';
  icon: string = 'feather icon-eye';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private utilsService: Utils,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const loginData = this.sessionService.getUserLogin();
    if (loginData) {
      this.userLogin = loginData;
    }
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      idUsuario: [0, Validators.required]
    });

    localStorage.setItem('navigationItems', JSON.stringify([]));
  }

  get formValues() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log("🚀 ~ LoginComponent ~ onSubmit ~ this.submitted:", this.submitted)
    if (this.loginForm.invalid) {
      this.utilsService.showNotification('warning', 'Debe completar los datos obligatorios');
      return;
    }
    const data: UsuarioLoginResult = {
      idEmpresaSede: 1,
      empresaSede: 'Test',
      idUsuario: 1,
      idPerfil: 1,
      usuario: this.loginForm.controls.usuario.value,
      usuarioPersona: 'Admin',
      perfil: 'Administrador'
    }
    this.sessionService.setUser({
      usuarioLoginResults: data,
      menuLoginResults: [],
      sedeLoginResults: []
    });
    this.router.navigate(['/catalog/schedule']);

    localStorage.setItem('navigationItems', JSON.stringify(CambioPrecioData));
    // this.utilsService.blockUIStart('Login AD...');
    // const params: LoginParams = {
    //   idEmpresa: 1,
    //   idEmpresaSede: 1,
    //   usuario: this.loginForm.controls.usuario.value,
    //   clave: this.loginForm.controls.clave.value,
    //   idProyecto: 1000,
    //   tipoAut: TipoAutenticacion.Login
    // };

    // this.utenticacionService.loginAD(params).subscribe({
    //   next: (res) => {
    //     if (!res.usuarioLoginResults.errorMessage) {
    //       this.userLogin = res;
    //       localStorage.setItem('navigationItems', JSON.stringify([]));
    //       this.router.navigate(['/auth/login/3']);
    //     } else {
    //       this.utilsService.showNotification('warning', res.usuarioLoginResults.errorMessage);
    //     }
    //     this.utilsService.blockUIStop();
    //   },
    //   error: (err) => {
    //     this.utilsService.showNotification('error', err.error);
    //     this.utilsService.blockUIStop();
    //   }
    // })

    // const currentUser: LoginResult | undefined = this.optUsuario.find(x => x.idUsuario === this.loginForm.controls.idUsuario.value);
    // if (currentUser) {
    //   this.sessionService.setUser(currentUser);
    //   localStorage.setItem('navigationItems', JSON.stringify([]));
    //   this.router.navigate(['/home/menu-modulo']);
    // }
  }

  onRedirect(): void {
    this.router.navigate(['/catalog/schedule']);
  }


  onshowPass(): void {
    if (this.typeT === 'text') {
      this.typeT = 'password';
      this.icon = 'feather icon-eye';
    }
    else {
      this.typeT = 'text';
      this.icon = 'feather icon-eye-off';
    }
  }
}
