import { Component, OnInit } from '@angular/core';
import { Doacao } from '../models-doacoes/model.component';
import { DoacoesService } from '../doacoes.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel2.component.html',
  styleUrls: ['./painel2.component.css']
})
export class PainelComponent2 implements OnInit {

  public doacoes: Doacao = new Doacao(0,"","",0);
  public doacao: Doacao[] = [];

  constructor(private _doacoesService: DoacoesService) { }

  ngOnInit(): void {
  }

  atualizar(id: number){
    this._doacoesService.atualizarDoacao(id,this.doacoes).subscribe(
      doacoes => {this.doacoes = new Doacao(0,"","",0)},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }


}
