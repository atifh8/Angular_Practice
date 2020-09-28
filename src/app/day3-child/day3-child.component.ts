import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3-child',
  templateUrl: './day3-child.component.html',
  styleUrls: ['./day3-child.component.css'],
})
export class Day3ChildComponent implements OnInit {
  message: String = ' This message is from child component';
  myDob = new Date('1994/12/12');

  constructor() {}

  ngOnInit(): void {}
}
