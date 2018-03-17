import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimaryContentComponent } from './primary-content/primary-content.component';
import { SecondaryContentComponent } from './secondary-content/secondary-content.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SideNavbarItemsComponent } from './side-navbar-items/side-navbar-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PrimaryContentComponent,
    SecondaryContentComponent,
    ContainerComponent,
    FooterComponent,
    DropdownComponent,
    SideNavbarComponent,
    SideNavbarItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
