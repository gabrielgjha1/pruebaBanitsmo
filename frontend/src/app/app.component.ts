import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'frontend';
  nombre: string = "";
  mostrarnombre: boolean = false;
  constructor(private router: Router, public AuthService: AuthService) {


    this.VerifyLogin();


  }


  //verificarLogin

  VerifyLogin() {

    const obs$ = new Observable(observable => {

      setInterval(() => {

        if (this.AuthService.usuario) {
          observable.next(true)
          observable.complete();

        }
        else {

          observable.next(false)


        }

      }, 100);



    });

    obs$.subscribe(

      valor => {

        if (valor) {

          console.log(valor);
          this.mostrarnombre = true;
          this.nombre = this.AuthService.usuario.nombre;
        } else {

          console.log(valor);

          this.mostrarnombre = false

        }

      }

    );

  }

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges) {



  }


  Logout() {

    localStorage.removeItem('token');
    this.AuthService.usuario = undefined;
    this.VerifyLogin();
    this.router.navigateByUrl('login')

  }


}




