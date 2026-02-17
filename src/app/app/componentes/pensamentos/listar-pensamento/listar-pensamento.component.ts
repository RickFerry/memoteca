import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../model/pensamento";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  pensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  protected haMaisPensamentos: boolean = true;
  protected filtro: string = '';

  constructor(private readonly service: PensamentoService) {
  }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(pensamentos => {
        this.pensamentos = pensamentos;
      });
  }

  protected carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro)
      .subscribe(pensamentos => {
        if (pensamentos.length > 0) {
          this.pensamentos = [...this.pensamentos, ...pensamentos];
          this.paginaAtual++;
        } else {
          this.haMaisPensamentos = false;
        }
      });
  }

  protected filtrarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;

    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(pensamentos => {
        this.pensamentos = pensamentos;
      });
  }
}
