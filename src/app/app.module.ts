import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './app/componentes/cabecalho/cabecalho.component';
import {NgOptimizedImage} from "@angular/common";
import {RodapeComponent} from './app/componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './app/componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import {FormsModule} from "@angular/forms";
import { ListarPensamentoComponent } from './app/componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './app/componentes/pensamentos/pensamento/pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
