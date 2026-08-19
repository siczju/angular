import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

   enviaInformacaoParaBackend(info: string){
    console.log("Enviando info para o backend: " + info);
  }
}
