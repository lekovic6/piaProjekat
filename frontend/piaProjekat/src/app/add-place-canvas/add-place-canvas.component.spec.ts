import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceCanvasComponent } from './add-place-canvas.component';

describe('AddPlaceCanvasComponent', () => {
  let component: AddPlaceCanvasComponent;
  let fixture: ComponentFixture<AddPlaceCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlaceCanvasComponent]
    });
    fixture = TestBed.createComponent(AddPlaceCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
