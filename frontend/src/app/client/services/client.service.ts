import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/interfaces/client.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  get token(): string {

    return localStorage.getItem('token') || '';

  }
  constructor(private http: HttpClient) {

  }

  TraerClientes(id: string): Observable<Client> {
    const url = `${environment.api}client/${id}`;

    return this.http.get<Client>(url, {
      headers: {
        'x-token': this.token
      }
    }).pipe(

      map((resp: any) => resp.client)

    )



  }

}
