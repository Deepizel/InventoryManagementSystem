import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlogComponent } from './productlog.component';

describe('ProductlogComponent', () => {
  let component: ProductlogComponent;
  let fixture: ComponentFixture<ProductlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
