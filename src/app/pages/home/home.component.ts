import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public listProduct: Array<{
    name: string;
    price: number;
    weigth: number;
    category: string;
    amount: number;
  }> = [];

  constructor() {
    this.listProduct = [
      {
        name: 'Produto 1asdasd',
        price: 2.5,
        weigth: 1.0,
        category: 'Categoria 1',
        amount: 0,
      },
    ];
  }

  showProductsAll() {
    const productsListServer = [
      {
        name: 'Sabonete',
        price: 3.5,
        weigth: 1.0,
        category: 'Categoria 1',
        amount: 0,
      },
      {
        name: 'Perfeuma',
        price: 4.5,
        weigth: 1.0,
        category: 'Categoria 1',
        amount: 0,
      },
    ];

    this.listProduct.push(...productsListServer);
  }

  ngOnInit(): void {}
}
