import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaAnswerComponent } from './fatwa-answer.component';

describe('FatwaAnswerComponent', () => {
  let component: FatwaAnswerComponent;
  let fixture: ComponentFixture<FatwaAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwaAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatwaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
