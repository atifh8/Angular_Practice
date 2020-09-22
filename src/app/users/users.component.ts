import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  disableButton = false;
  userName: string = '';
  loadElement = false;

  constructor() {
    // Disable button ( using property binding...)
    setTimeout(() => {
      this.disableButton = true;
    }, 2000);
  }

  loadHtmlElement() {
    this.loadElement = true;
  }
  getColor() {
    return this.disableButton ? 'green' : 'red';
  }
  ngOnInit(): void {}
}
