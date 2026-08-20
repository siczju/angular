import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));

  }

  obterStorage(): Cliente[]{
      const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
      if(repositorioClientes){
        // json.parse -> transforma json em objeto
        const clientes: Cliente[] = JSON.parse(repositorioClientes); // JSON.parse() transforma em um vetor de Clientes 
        return clientes;
      }
      const clientes: Cliente[] = [];
      // stringify -> transforma o objeto em string json
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
      return clientes;
  }
}
