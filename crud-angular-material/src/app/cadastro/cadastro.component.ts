import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { matCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, matCardModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
