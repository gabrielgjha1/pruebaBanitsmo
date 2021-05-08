import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TableComponent } from './components/table/table.component';
import { GraficasComponent } from './components/graficas/graficas.component';

@NgModule({
  declarations: [
    InicioComponent,
    TableComponent,
    GraficasComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FormsModule,
    ChartsModule
  ]
})
export class ClientModule { }
