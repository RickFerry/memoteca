import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent implements OnInit {
  @Input() haMaisPensamentos: boolean = false;
  @Output() carregarMais = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCarregarMaisClick(): void {
    this.carregarMais.emit();
  }
}
