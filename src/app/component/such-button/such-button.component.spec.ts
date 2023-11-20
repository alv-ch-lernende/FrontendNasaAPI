import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchButtonComponent } from './such-button.component';

describe('SuchButtonComponent', () => {
  let component: SuchButtonComponent;
  let fixture: ComponentFixture<SuchButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuchButtonComponent]
    });
    fixture = TestBed.createComponent(SuchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
