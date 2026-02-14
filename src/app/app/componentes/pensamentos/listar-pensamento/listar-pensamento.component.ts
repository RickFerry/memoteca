import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  pensamentos = [
    {
      conteudo: 'I love angular',
      autoria: 'Dev',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Angular é vida',
      autoria: 'Dev',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Angular é vida e cada pessoa que se anima em aprender é um ponto positivo para a comunidade,' +
        ' mas é importante lembrar que cada pessoa tem seu tempo e seu ritmo de aprendizado, e não devemos comparar' +
        ' ou julgar os outros por isso. Estamos aqui para ajudar uns aos outros a crescer e aprender juntos.',
      autoria: 'Dev',
      modelo: 'modelo2'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
