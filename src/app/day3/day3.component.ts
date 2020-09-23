import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Day3ChildComponent } from '../day3-child/day3-child.component';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css'],
})
export class Day3Component implements OnInit, AfterViewInit {
  messageReceived: String;
  myDobReceived;
  dat = new Date(1994, 11, 15);
  toggle = true; // start with true == shortDate

  @ViewChild(Day3ChildComponent) child;

  constructor() {}
  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
    this.messageReceived = this.child.message;
    this.myDobReceived = this.child.myDob;
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
  ngOnInit(): void {}
}
