import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];


  transferir($event){
    console.log($event);

    // O operador ... desmembra o objeto e suas propriedades, assim estamos passando por parametro cada uma das propriedades mais a data

    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }


}
