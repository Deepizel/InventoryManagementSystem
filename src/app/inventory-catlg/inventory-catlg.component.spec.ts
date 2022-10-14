import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCatlgComponent } from './inventory-catlg.component';

describe('InventoryCatlgComponent', () => {
  let component: InventoryCatlgComponent;
  let fixture: ComponentFixture<InventoryCatlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCatlgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCatlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
