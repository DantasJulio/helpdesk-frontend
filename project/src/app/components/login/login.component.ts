import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(8));

  constructor(private toastr: ToastrService, private router : Router) {

  }

  ngOnInit(): void {
  }

  logar() {
    if (this.validaCampos()) {
      this.toastr.success('Ok')
      this.router.navigate(['home']);
    } else {
      this.toastr.error('Usuário e/ou senha inválidos!')
    }
    this.creds.senha = '';
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }
  
}
