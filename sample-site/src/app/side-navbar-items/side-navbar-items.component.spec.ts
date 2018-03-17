import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarItemsComponent } from './side-navbar-items.component';

describe('SideNavbarItemsComponent', () => {
  let component: SideNavbarItemsComponent;
  let fixture: ComponentFixture<SideNavbarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavbarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavbarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
