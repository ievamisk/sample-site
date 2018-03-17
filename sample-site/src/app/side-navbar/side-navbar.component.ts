import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.sass']
})
export class SideNavbarComponent implements OnInit {
  @Output()
  private open: boolean;
  private sidenavHeight: number;

  private itemsActivity: Array<boolean>;
  constructor() { }

  ngOnInit() {
    this.open = false;
    this.sidenavHeight = 0;

    this.itemsActivity = [
      false,
      false,
      false,
      false
    ];
  }

  toggleOpen() {
    this.open = !this.open;
  }

  toggleItem(index: number) {
    this.itemsActivity[index] = !this.itemsActivity[index];
  }

  getSidenavHeight() {
    if (this.open) {
      const sidenavHeaderHeight = document.getElementsByClassName('sidenav-header')[0].scrollHeight;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.sidenavHeight = windowHeight - sidenavHeaderHeight;
    } else {
      this.sidenavHeight = 0;
    }

    return this.sidenavHeight;
  }
}
