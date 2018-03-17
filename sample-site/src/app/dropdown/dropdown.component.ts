import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {
  @Input()
  private active: boolean;
  constructor() { }

  ngOnInit() {
    this.active = false;
  }

}
