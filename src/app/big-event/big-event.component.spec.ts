import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigEventComponent } from './big-event.component';

describe('BigEventComponent', () => {
  let component: BigEventComponent;
  let fixture: ComponentFixture<BigEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
