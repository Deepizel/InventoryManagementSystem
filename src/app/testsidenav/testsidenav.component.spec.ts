import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsidenavComponent } from './testsidenav.component';

describe('TestsidenavComponent', () => {
  let component: TestsidenavComponent;
  let fixture: ComponentFixture<TestsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
