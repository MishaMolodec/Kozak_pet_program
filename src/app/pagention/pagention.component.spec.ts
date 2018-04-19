import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagentionComponent } from './pagention.component';

describe('PagentionComponent', () => {
  let component: PagentionComponent;
  let fixture: ComponentFixture<PagentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
