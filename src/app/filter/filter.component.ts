import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Output() searchValue = new EventEmitter();
  filterValue = '';
  ngOnInit(): void {}
  filter() {
    this.searchValue.emit(this.filterValue);
  }
}
