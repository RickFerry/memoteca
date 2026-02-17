import {Component, OnInit} from '@angular/core';
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private builder: FormBuilder) {
  }

  ngOnInit() {
    this.formulario = this.builder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?!\s*$).+/),
        Validators.minLength(3),
        Validators.maxLength(255),
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?!\s*$).+/),
        Validators.minLength(3),
        Validators.maxLength(255),
      ])],
      modelo: [''],
      favorito: [false]
    });
  }

  protected criarPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']).catch(error => {
          console.error('Erro ao navegar para listarPensamento:', error)
        });
      });
    }
  }

  protected cancelar() {
    this.router.navigate(['/listarPensamento']).catch(error => {
      console.error('Erro ao navegar para listarPensamento:', error)
    });
  }
}
