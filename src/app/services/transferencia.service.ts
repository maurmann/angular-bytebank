import { Injectable } from '@angular/core';

// provided in root indice que o servico pode ser injetado em qualquer componente ou modulo da aplicacao
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  consultar() {
    return this.listaTransferencias;
  }

  adicionar(transferencia: any) {
    this.adicionarTimestamp(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private adicionarTimestamp(transferencia: any) {
    transferencia.data = new Date();
  }
}
