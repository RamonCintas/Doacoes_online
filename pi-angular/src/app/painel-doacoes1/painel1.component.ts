import { Component, OnInit } from '@angular/core';
import { Doacao } from '../models-doacoes/model.component';
import { DoacoesService } from '../doacoes.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel1.component.html',
  styleUrls: ['./painel1.component.css']
})
export class PainelComponent1 implements OnInit {

  public doacoes: Doacao = new Doacao(0,"","",0);
  public doacao: Doacao[] = [];

  constructor(private _doacoesService: DoacoesService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._doacoesService.cadastrarDoacao(this.doacoes).subscribe(
      doacoes => {this.doacoes = new Doacao(0,"","",0)},
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

}
