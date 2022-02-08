import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskFatwasComponent } from './ask-fatwas.component';

describe('AskFatwasComponent', () => {
  let component: AskFatwasComponent;
  let fixture: ComponentFixture<AskFatwasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskFatwasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskFatwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
