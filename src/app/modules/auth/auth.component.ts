import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service/auth.servicie';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6)
          ])
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  sendLogin(): void {
    const { email, password } = this.formLogin.value

    console.log(email, password)
    this.authService.sendCredentials(email, password).subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
         console.log('Session iniciada correcta', responseOk);
         const cookieExists: boolean = this.cookie.check('.TicketanicaSession');
        console.log(cookieExists);
        this.router.navigate(['/home']);
       },
         err => {//TODO error 400>=
           this.errorSession = true
           console.log('⚠⚠⚠⚠Ocurrio error con tu email o password', err);
         })

  }
}
