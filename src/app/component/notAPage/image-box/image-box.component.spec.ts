import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoxComponent } from './image-box.component';

describe('MageBoxComponent', () => {
  let component: ImageBoxComponent;
  let fixture: ComponentFixture<ImageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageBoxComponent]
    });
    fixture = TestBed.createComponent(ImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
