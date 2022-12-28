import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-tabela-classificacao',
  templateUrl: './tabela-classificacao.component.html',
  styleUrls: ['./tabela-classificacao.component.css']
})

export class TabelaClassificacaoComponent {

  dados: any = [];

  constructor(private apiService: APIService){
  }

  ngOnInit(): void {
    this.dados = this.apiService.getProduct().subscribe(
      (data) => {
        this.dados = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  color(posicao: any) {
    if (posicao >= 1 && posicao <= 4) {
      return 'libertadores';
    }
    else if (posicao >= 5 && posicao <= 6){
      return 'pre-libertadores';
    }
    else if (posicao >= 7 && posicao <= 12) {
      return 'sul-americana';
    }
    else if (posicao >= 17 && posicao <= 20) {
      return 'rebaixamento';
    }
    return 'nda';
  }
}
