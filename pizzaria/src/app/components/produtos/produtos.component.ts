import { Pizza } from './../../Interfaces/PizzaInterface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  pizzas: Pizza[] = [
    {
      id: 1,
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela e manjericão fresco.',
      preco: 39.90,
      imagem: 'https://images.unsplash.com/photo-1601924582975-4c1d2603c0f2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      nome: 'Calabresa',
      descricao: 'Calabresa fatiada, cebola e azeitonas.',
      preco: 44.90,
      imagem: 'https://images.unsplash.com/photo-1603079840292-036e54d30f80?auto=format&fit=crop&w=400&q=80'
    }
    // Você pode adicionar mais pizzas aqui
  ];
}

