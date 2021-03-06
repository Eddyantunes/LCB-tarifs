import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisageComponent } from './visage.component';

describe('VisageComponent', () => {
  let component: VisageComponent;
  let fixture: ComponentFixture<VisageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
