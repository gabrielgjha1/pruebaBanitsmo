import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Client } from 'src/app/interfaces/client.interfaces';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {




  data: Number[] = []
  data2: Number[] = []
  label: string[] = []
  label2: string[] = []
  id: string = "60937d3a690d6e6ae7620810";
  showData: boolean = false;
  client: Client;
  constructor(private clientServices: ClientService) { }

  ngOnInit(): void {


  }

  submit() {

    if (!this.id) {


      return this.MensajeError()

    }

    this.clientServices.TraerClientes(this.id).subscribe((resp: Client) => {
      this.client = resp;

      this.data = [Number(resp.Credit_Limit), Number(resp.Total_Trans_Amt)]

      this.label = ['Creditos limites', 'Total de creditos gastados en los ultimos 12 meses']

      this.data2 = [Number(resp.Months_Inactive_12_mon), 12]
      this.label2 = ['Meses inactivos', '12 meses']

      this.showData = true;

    }, (error => {

      return this.MensajeError()


    }))


  }

  MensajeError() {

    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese un id valdio!',
    })


  }

  async newPicture() {

    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (file) {

    }

  }

}
