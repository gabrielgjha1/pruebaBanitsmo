import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;

  miFormulario: FormGroup = this.fb.group({

    nombre: ['', Validators.required],
    user_name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]]

  }, {
    validators: [this._authService.camposIguales('password', 'password2')]
  });

  constructor(private fb: FormBuilder, private _authService: AuthService, private router: Router) { }

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


    Swal.fire({
      title: 'Esta seguro?',
      text: "Esta sera su cuenta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Crear cuenta!'
    }).then((result) => {



      if (result.isConfirmed) {


        this._authService.registerUser(this.miFormulario.value).subscribe(resp => {

          Swal.fire(
            'Buen trabajo el usuario a sido creado!',
            'Click aqui para continuar!',
            'success'
          )
          this.router.navigateByUrl('client')


        }, (error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifique los campos!',
          })

        })

      }
    })


  }
}
