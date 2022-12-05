import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffposComponent } from './staffpos.component';

describe('StaffposComponent', () => {
  let component: StaffposComponent;
  let fixture: ComponentFixture<StaffposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
