import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //Metadata para mandar dados para quem chegou
  @Output() aoTransferir = new EventEmitter<any>();

   //atribuindo as variáveis
   valor: number;
   destino: number;

  transferir() {
    console.log('Solicitada nova transferencia');
    //this.aoTransferir.emit({valor: this.valor, destino:this.destino}); > equivalente a const.
    const valorEmitir = { valor: this.valor, destino:this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
    }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
