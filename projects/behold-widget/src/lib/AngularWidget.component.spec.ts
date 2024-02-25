import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeholdWidgetComponent } from './AngularWidget.component';

describe('BeholdWidgetComponent', () => {
  let component: BeholdWidgetComponent;
  let fixture: ComponentFixture<BeholdWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeholdWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeholdWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
