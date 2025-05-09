import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextoRolComponent } from '../../shared/texto-rol/texto-rol.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TextoRolComponent],
  templateUrl: './home.component.html',
})
export class HomePageComponent {

}
