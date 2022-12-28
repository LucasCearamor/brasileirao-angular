import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaClassificacaoComponent } from './tabela-classificacao/tabela-classificacao.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TabelaClassificacaoComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
