import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTourComponent } from './show-tour.component';

describe('ShowTourComponent', () => {
  let component: ShowTourComponent;
  let fixture: ComponentFixture<ShowTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
