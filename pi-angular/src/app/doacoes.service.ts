import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doacao } from './models-doacoes/model.component';

@Injectable({
  providedIn: 'root'
})
export class DoacoesService {

  private url = "http://localhost:8080/api";
  httpClient: any;

  constructor(private _httpClient: HttpClient) {  }

  getDoacoes(): Observable<Doacao[]>{
    return this._httpClient.get<Doacao[]>(this.url + "/doacoes");
  }

  cadastrarDoacao(doacoes: Doacao):Observable<Doacao[]>{
    return this._httpClient.post<Doacao[]>(this.url + "/cadastrar",doacoes);
  }

  atualizarDoacao(id:any ,doacoes: Doacao):Observable<Doacao[]>{
    const urlAtualizar = `${this.url}/editar/${id}`;
    return this._httpClient.put<Doacao[]>(urlAtualizar,doacoes);
  }


  removerDoacao(id:any):Observable<Doacao[]>{
    const urlDeletar = `${this.url}/doacao/${id}`;
    return this._httpClient.delete<Doacao[]>(urlDeletar);
  }


}
