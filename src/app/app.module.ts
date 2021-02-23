import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** IMPORTACAO PARA USO DO FORMS DO ANGULAR E SER POSSÍVEL TRABALHAR DE FORMA DINAMICA **/
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/** IMPORTANDO CLASSES RESPONSAVEIS PARA FAZER AS ROTAS **/
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ConsumoAguaComponent } from './consumo-agua/consumo-agua.component';
import { ConsumoOleoComponent } from './consumo-oleo/consumo-oleo.component';
import { ConsumoCombustivelComponent } from './consumo-combustivel/consumo-combustivel.component';
import { ResiduoOrganicoMarComponent } from './residuo-organico-mar/residuo-organico-mar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {HttpClientModule} from '@angular/common/http';
import { NavioComponent } from './navio/navio.component';

/** VETOR QUE RECEBE AS ROTAS QUE O SISTEMA TERÁ **/
const rotasApp: Routes = [
  {path: "agua-navio", component: ConsumoAguaComponent},
  {path: "combustivel-navio", component: ConsumoCombustivelComponent},
  {path: "oleo-lubrificante-navio", component: ConsumoOleoComponent},
  {path: "residuo-organico-navio", component: ResiduoOrganicoMarComponent},
  {path: "navio", component: NavioComponent},
  {path: "", component: InicioComponent}, /** se tiver apenas o url geral será redirecionado para o inicio **/
  {path: "**", component: PaginaNaoEncontradaComponent} /** se não existir nenhum dos endereços informados vai pra essa pagina**/
]

@NgModule({
  declarations: [
    AppComponent,
    ConsumoAguaComponent,
    ConsumoOleoComponent,
    ConsumoCombustivelComponent,
    ResiduoOrganicoMarComponent,
    InicioComponent,
    PaginaNaoEncontradaComponent,
    NavioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotasApp, {enableTracing: true}) /** importando o modulo de rotas, passando o vetor de rotas como parametro
     e ativando o registro de eventos **/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
