import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private enviaFormularioService = inject(EnviaFormularioService);

  name = "Leo";
  deveMostrarTitulo = true;
  listItems = ["feijão", "arroz", "macarrão", "carne"];

  @Input() minhaPropsDeFora!: string;
  @Output() emitindoValorName = new EventEmitter<string>();

  submit(){
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackend("Enviando informação");
  }
}

