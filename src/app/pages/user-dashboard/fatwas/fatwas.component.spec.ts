import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwasComponent } from './fatwas.component';

describe('FatwasComponent', () => {
  let component: FatwasComponent;
  let fixture: ComponentFixture<FatwasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
