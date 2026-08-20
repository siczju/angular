import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    console.log(cliente);
  }

  obterStorage(): Cliente[]{
      const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
      if(repositorioClientes){
        // json.parse -> transforma json em objeto
        const clientes: Clientes[] = JSON.parse(repositorioClientes); // JSON.parse() transforma em um vetor de Clientes 
        return clientes;
      }
      const clientes: Cliente[] = [];
      // stringify -> transforma json em string
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
      return clientes;
  }
}
