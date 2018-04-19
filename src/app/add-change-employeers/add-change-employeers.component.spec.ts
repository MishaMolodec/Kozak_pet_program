import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangeEmployeersComponent } from './add-change-employeers.component';

describe('AddChangeEmployeersComponent', () => {
  let component: AddChangeEmployeersComponent;
  let fixture: ComponentFixture<AddChangeEmployeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChangeEmployeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangeEmployeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
