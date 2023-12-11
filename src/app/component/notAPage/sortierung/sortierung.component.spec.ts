import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortierungComponent } from './sortierung.component';

describe('SortierungComponent', () => {
  let component: SortierungComponent;
  let fixture: ComponentFixture<SortierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortierungComponent]
    });
    fixture = TestBed.createComponent(SortierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
