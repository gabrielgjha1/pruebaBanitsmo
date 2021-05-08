import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  miFormulario: FormGroup = this.fb.group({

    user_name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });

  constructor(private fb: FormBuilder, private _AuthServices: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  validarDatos(campo: string) {
    if (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched) {

      return true;

    }

  }

  submit() {

    if (!this.miFormulario.valid) {

      this.miFormulario.markAllAsTouched();

      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifique los campos!',
      })

    }

    this._AuthServices.login(this.miFormulario.value).subscribe(resp => {

      this.router.navigateByUrl('client')

    })

  }



}
