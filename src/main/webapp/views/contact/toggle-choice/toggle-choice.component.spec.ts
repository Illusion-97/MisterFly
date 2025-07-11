import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChoiceComponent } from './toggle-choice.component';

describe('ToggleChoiceComponent', () => {
  let component: ToggleChoiceComponent;
  let fixture: ComponentFixture<ToggleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
