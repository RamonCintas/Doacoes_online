import { Component, OnInit } from '@angular/core';
import { DoacoesService } from '../doacoes.service';
import { Doacao } from '../models-doacoes/model.component';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  public doacoes: Doacao[] = [];

  public doacoesExcluir: Doacao = new Doacao(0,"","",0);
  excluir(id: number){
    this._doacoesService.removerDoacao(id).subscribe(
      doacoes => {this.doacoesExcluir = new Doacao(0,"","",0)},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";

  }


  constructor(private _doacoesService: DoacoesService) { }

  ngOnInit(): void {
    this.listarDoacoes()
  }


  listarDoacoes(){
    this._doacoesService.getDoacoes()
      .subscribe(
        retornaDoacao => {
          this.doacoes = retornaDoacao.map(
            item=>{
              return new Doacao(
                item.id,
                item.nome,
                item.descricao,
                item.meta
              );
            }
          )
        }
      )
  }


}
