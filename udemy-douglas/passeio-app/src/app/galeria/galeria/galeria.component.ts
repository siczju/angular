import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../../lugares/lugar.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];


  constructor(
    private lugaresService: LugarService,
    private categoriasService: CategoriaService
  ){

  }

  ngOnInit(): void {
    this.categoriasService.obterTodas().subscribe(categorias => this.categoriasFiltro = categorias);
    this.lugaresService.obterTodos().subscribe(lugares => this.lugares = lugares);
  }

}
