import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  private firstName: string;
  private lastName: string;
  private message: string;

  firstNameValid: string;
  lastNameValid: string;
  messageValid: string;

  constructor() { }

  ngOnInit() {
  }

  validation(e) {
    e.preventDefault();
    const letterChars = /^[A-ZĄČĘĖĮŠŲŪa-ząčęėįšųū]+$/;
    const messageChars = /^[A-ZĄČĘĖĮŠŲŪa-ząčęėįšųū0-9\s\-.:",@]+$/;

    if (typeof this.firstName !== 'undefined' && letterChars.test(this.firstName) && this.firstName !== '') {
      this.firstNameValid = 'sidebar-form-input-valid';
    } else {
      this.firstNameValid = 'sidebar-form-input-invalid';
    }

    if (typeof this.lastName !== 'undefined' && letterChars.test(this.lastName) && this.lastName !== '') {
      this.lastNameValid = 'sidebar-form-input-valid';
    } else {
      this.lastNameValid = 'sidebar-form-input-invalid';
    }
    if (typeof this.message !== 'undefined' && messageChars.test(this.message) && this.message !== '') {
      this.messageValid = 'sidebar-form-textarea-valid';
    } else {
      this.messageValid = 'sidebar-form-textarea-invalid';
    }

  }

}
