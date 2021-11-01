import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegardComponent } from './regard.component';

describe('RegardComponent', () => {
  let component: RegardComponent;
  let fixture: ComponentFixture<RegardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
