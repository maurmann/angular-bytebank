import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.models';
import { Observable } from 'rxjs';

// provided in root indice que o servico pode ser injetado em qualquer componente ou modulo da aplicacao
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente : HttpClient)  {
    this.listaTransferencias = [];
  }

  // Observable garante que a resposta seja retornada pois a requisicao é assincrona
  consultar(): Observable<Transferencia[]> {
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia) {
    this.adicionarTimestamp(transferencia);
      this.listaTransferencias.push(transferencia);
  }

  adicionarTimestamp(transferencia:any){
    transferencia.data=new Date();
  }



}
