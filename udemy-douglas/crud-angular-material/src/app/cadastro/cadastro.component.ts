import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Cliente } from './cliente'
import { ClienteService } from '../cliente.service'

@Component({
  selector: 'app-cadastro',
  imports: [MatButtonModule, MatIconModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  cliente: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService) { } // injentando o service de cliente

  salvar(){
    this.service.salvar(this.cliente);
  }
}
