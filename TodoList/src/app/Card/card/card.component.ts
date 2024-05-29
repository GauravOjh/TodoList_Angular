import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
