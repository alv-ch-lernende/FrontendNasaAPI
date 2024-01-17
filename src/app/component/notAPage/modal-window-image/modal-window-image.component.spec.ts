import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowImageComponent } from './modal-window-image.component';

describe('ModalWindowImageComponent', () => {
  let component: ModalWindowImageComponent;
  let fixture: ComponentFixture<ModalWindowImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalWindowImageComponent]
    });
    fixture = TestBed.createComponent(ModalWindowImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
