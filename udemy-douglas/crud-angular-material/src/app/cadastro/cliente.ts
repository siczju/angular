import { v4 as uuid} from 'uuid'; // v4 é a versão do UUID que gera um identificador aleatório
// as uuid é um apelido para a função v4, que é usada para gerar o UUID

export class Cliente {
    id?: string;
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    email?: string;
    deletando: boolean = false;

    static  newCliente(){
        const cliente = new Cliente();
        cliente.id = uuid(); // cria um uuid automaticamente

        return cliente;
    }
}