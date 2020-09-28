import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  Products = [
    {
      id: 'ABC8441189035',
      name: 'Tshirt',
      description: 'A small description on ....',
    },
    {
      id: 'DEF6510463347',
      name: 'Shoes',
      description: 'A small description on ....',
    },
    {
      id: 'GHI0831819467',
      name: 'Handbags',
      description: 'A small description on ....',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
