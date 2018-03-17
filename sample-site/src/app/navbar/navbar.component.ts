import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  private menuItemsActivity: Array<boolean>;

  constructor() { }

  ngOnInit() {
    this.menuItemsActivity = [
      false,
      false,
      false,
      false
    ];
  }

  toggleMenuItem(index: number) {
    this.menuItemsActivity.forEach((element, i) => {
      if (index === i ) {
        this.menuItemsActivity[i] = !this.menuItemsActivity[i];
      } else {
        this.menuItemsActivity[i] = false;
      }
    });
  }
}
