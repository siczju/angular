import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente'

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTabela: string[] = ["id", "nome", "cpf", "dataNascimento", "email"]

  constructor(private service: ClienteService) { } // injentando o service de cliente

  ngOnInit(){
    console.log("banana");
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

}
