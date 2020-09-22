import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor() {}
  buttonText = 'Search Here';
  tableData = [
    {
      id: 1,
      name: 'atif',
      email: 'atifh8@gmail.com',
    },
    {
      id: 2,
      name: 'risabh',
      email: 'risabh@gslab.com',
    },
  ];

  ngOnInit(): void {}
  onApplyFilter(event: any) {
    console.log(' value received from ', event);
  }
}
