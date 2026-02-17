import {Component, Input} from '@angular/core';
import {Pensamento} from "../model/pensamento";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private readonly service: PensamentoService) {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  protected mudarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe({
      next: (pensamentoAtualizado) => {
        this.pensamento = pensamentoAtualizado;
      },
      error: (erro) => {
        console.error('Erro ao mudar favorito:', erro);
      }
    });
  }
}
