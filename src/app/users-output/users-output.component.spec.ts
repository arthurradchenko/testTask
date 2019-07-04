import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOutputComponent } from './users-output.component';

describe('UsersOutputComponent', () => {
  let component: UsersOutputComponent;
  let fixture: ComponentFixture<UsersOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
