import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnterLayoutComponent } from './innter-layout.component';

describe('InnterLayoutComponent', () => {
  let component: InnterLayoutComponent;
  let fixture: ComponentFixture<InnterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
