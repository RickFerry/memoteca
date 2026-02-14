import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CriarPensamentoComponent} from "./app/componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentoComponent} from "./app/componentes/pensamentos/listar-pensamento/listar-pensamento.component";
import {
  ExcluirPensamentoComponent
} from "./app/componentes/pensamentos/excluir-pensamento/excluir-pensamento.component";
import {EditarPensamentoComponent} from "./app/componentes/pensamentos/editar-pensamento/editar-pensamento.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
