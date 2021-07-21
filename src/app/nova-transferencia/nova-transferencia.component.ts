import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destinatario: number;

  constructor(private transferenciaService:TransferenciaService){

  }

  transferir() {
    //console.log('transferir');
    //const valorEmitir = { valor: this.valor, destinatario: this.destinatario };
    //this.aoTransferir.emit(valorEmitir);
    //this.limparCampos();



  }

  limparCampos(){
    this.valor=0;
    this.destinatario=0;
  }
}
