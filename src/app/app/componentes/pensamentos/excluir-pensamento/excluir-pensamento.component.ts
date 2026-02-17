import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../model/pensamento";
import {ActivatedRoute, Router} from "@angular/router";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(+id).subscribe(pensamento => {
        this.pensamento = pensamento;
      });
    }
  }

  excluirPensamento() {
    this.service.excluir(this.pensamento.id).subscribe(() => {
      this.router.navigate(['/listarPensamento']).catch(error => {
        console.error('Erro ao navegar para listarPensamento:', error)
      });
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']).catch(error => {
      console.error('Erro ao navegar para listarPensamento:', error)
    });
  }
}
