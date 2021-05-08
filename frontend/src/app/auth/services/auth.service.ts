import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: Usuario;


  get token(): string {

    return localStorage.getItem('token') || '';

  }

  constructor(private http: HttpClient, private router: Router) { }


  validarToken(): Observable<boolean> {
    const url = `${environment.api}auth/renewtoken`;

    return this.http.get(url, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      tap((resp: any) => {
        const { nombre, user_name, uid, img } = resp.usuario


        this.usuario = new Usuario(nombre, uid, user_name, '', img);
      }),
      map(resp => true),
      catchError(resp => of(false))

    )

  }

  registerUser(usuario: Usuario) {
    const url = `${environment.api}usuarios`;

    return this.http.post(url, usuario).pipe(

      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })

    )


  }


  login(usuario: Usuario) {

    const url = `${environment.api}auth/login`;

    return this.http.post(url, usuario).pipe(

      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })

    )



  }


  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;


      if (pass1 !== pass2) {
        formGroup.get(campo2).setErrors({ noIguale: true })
        return { noIguale: true }

      }

      formGroup.get(campo2)?.setErrors(null)


      return null


    }

  }

}
