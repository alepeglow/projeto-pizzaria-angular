import { Component, Input } from '@angular/core';
import { Pizza } from '../../Interfaces/PizzaInterface';

@Component({
  selector: 'app-card-pizza',
  standalone: false,
  templateUrl: './card-pizza.component.html',
  styleUrl: './card-pizza.component.css'
})
export class CardPizzaComponent {
  @Input() pizza!: Pizza;
}
