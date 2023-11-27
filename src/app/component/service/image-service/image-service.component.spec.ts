import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageServiceComponent } from './image-service.component';

describe('ImageServageComponent', () => {
  let component: ImageServiceComponent;
  let fixture: ComponentFixture<ImageServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageServiceComponent]
    });
    fixture = TestBed.createComponent(ImageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
