import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from './brasilapi.models';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {

  baseURL: string = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) { }

  listarUFs(): Observable<Estado[]>{ // pois vai retornar um array de estados
    return this.http.get<Estado[]>(this.baseURL + '/ibge/uf/v1');
  }
}
