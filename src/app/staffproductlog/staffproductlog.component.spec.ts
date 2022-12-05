import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffproductlogComponent } from './staffproductlog.component';

describe('StaffproductlogComponent', () => {
  let component: StaffproductlogComponent;
  let fixture: ComponentFixture<StaffproductlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffproductlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffproductlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
