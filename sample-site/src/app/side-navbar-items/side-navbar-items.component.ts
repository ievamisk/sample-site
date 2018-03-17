import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-navbar-items',
  templateUrl: './side-navbar-items.component.html',
  styleUrls: ['./side-navbar-items.component.sass']
})
export class SideNavbarItemsComponent implements OnInit {
  @Input()
  private active: boolean;

  constructor() { }

  ngOnInit() {
    this.active = false;
  }

}
