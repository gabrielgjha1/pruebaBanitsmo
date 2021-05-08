import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    ClientModule,
    HttpClientModule

  ],
  exports: [
    TableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
