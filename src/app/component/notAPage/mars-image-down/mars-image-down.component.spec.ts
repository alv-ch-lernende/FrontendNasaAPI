import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsImageDownComponent } from './mars-image-down.component';

describe('MarsImageDownComponent', () => {
  let component: MarsImageDownComponent;
  let fixture: ComponentFixture<MarsImageDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarsImageDownComponent]
    });
    fixture = TestBed.createComponent(MarsImageDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
