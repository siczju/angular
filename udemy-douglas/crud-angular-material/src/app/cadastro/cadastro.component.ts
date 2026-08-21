import { Component, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Cliente } from './cliente'
import { ClienteService } from '../cliente.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cadastro',
  imports: [MatButtonModule, MatIconModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor(private service: ClienteService, private route: ActivatedRoute) { } // injentando o service de cliente e o activatedRoute para pegar os parametros da url

  ngOnInit(): void{

    this.route.queryParamMap.subscribe((query: any) => {
        const id = query.get('id');

        if(id){
          let clienteEncontrado = this.service.buscarClientePorId(id);

          if(clienteEncontrado){
            this.atualizando = true;
            this.cliente = clienteEncontrado;
          }
          // this.cliente = this.service.buscarClientePorId(id) || Cliente.newCliente(); // se retornar o cliente retorna normal se retornar undefined retorna um novo cliente
        }
    })
  }

  atualizar(cliente: Cliente){
    this.service.atualizar(cliente);
  }

  salvar(){
    this.service.salvar(this.cliente);
    this.cliente = Cliente.newCliente();
  }
}
