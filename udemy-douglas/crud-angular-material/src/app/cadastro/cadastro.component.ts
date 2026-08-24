import { Component, OnInit, inject } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Cliente } from './cliente'
import { ClienteService } from '../cliente.service'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatSelectChange, MatSelectModule } from '@angular/material/select'
import { BrasilapiService } from '../brasilapi.service'
import { Estado, Municipio } from '../brasilapi.models'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-cadastro',
  imports: [MatButtonModule, MatIconModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule,
    NgxMaskDirective, MatSelectModule, CommonModule
  ], providers:[provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);
  estados: Estado[] = [];
  municipios: Municipio[] = [];


  constructor(
    private service: ClienteService,
    private brasilapiService: BrasilapiService,
    private route: ActivatedRoute,
    private router: Router) { } // injentando o service de cliente e o activatedRoute para pegar os parametros da url

  ngOnInit(): void{

    this.route.queryParamMap.subscribe((query: any) => {
        const id = query.get('id');

        if(id){
          let clienteEncontrado = this.service.buscarClientePorId(id);

          if(clienteEncontrado){
            this.atualizando = true;
            this.cliente = clienteEncontrado;

            if(this.cliente.uf){
              const event = {value: this.cliente.uf} as MatSelectChange;
              this.carregarMunicipios(event);
            }
          }
          // this.cliente = this.service.buscarClientePorId(id) || Cliente.newCliente(); // se retornar o cliente retorna normal se retornar undefined retorna um novo cliente
        }
    })

    this.carregarUFs();

  }

  carregarUFs(){
    // observable/subscriber é um objeto que representa uma coleção de valores futuros ou eventos. Ele é usado para lidar com operações assíncronas, como chamadas HTTP, eventos de usuário, etc. Um observable pode emitir múltiplos valores ao longo do tempo e os consumidores podem se inscrever para receber esses valores.
    this.brasilapiService.listarUFs().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: erro => console.error("erro ao listar estados", erro)
    })
  }

  carregarMunicipios(event: MatSelectChange){
    const ufSelecionada = event.value;
    this.brasilapiService.listarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipios = listaMunicipios,
      error: erro => console.error("erro ao listar municipios", erro)
    })
  }

  atualizar(cliente: Cliente){
    this.service.atualizar(cliente);
  }

  salvar(){

    if(!this.atualizando){
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.router.navigate(['/consulta']);
      this.mostrarMensagem("Salvo com sucesso!");
    }else{
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta']);
      this.mostrarMensagem("Atualizado com sucesso!");
    }
  }

  mostrarMensagem(mensagem: string){
    this.snack.open(mensagem, "Ok")
  }

}
