import {Component, OnInit} from '@angular/core';
import {PensamentoService} from "../pensamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private readonly service: PensamentoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly builder: FormBuilder) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.buscarPorId(+id).subscribe(pensamento => {
        this.formulario = this.builder.group({
          id: [pensamento.id],
          conteudo: [pensamento.conteudo, Validators.compose([
            Validators.required,
            Validators.pattern(/^(?!\s*$).+/),
            Validators.minLength(3),
            Validators.maxLength(255),
          ])],
          autoria: [pensamento.autoria, Validators.compose([
            Validators.required,
            Validators.pattern(/^(?!\s*$).+/),
            Validators.minLength(3),
            Validators.maxLength(255),
          ])],
          modelo: [pensamento.modelo],
          favorito: [pensamento.favorito]
        });
      });
    }
  }

  editarPensamento() {
    if (this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']).catch(error => {
          console.error('Erro ao navegar para listarPensamento:', error);
        });
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']).catch(error => {
      console.error('Erro ao navegar para listarPensamento:', error);
    });
  }
}
