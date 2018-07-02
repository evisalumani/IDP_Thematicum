import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeStockAllocationComponent } from './theme-stock-allocation.component';

describe('ThemeStockAllocationComponent', () => {
  let component: ThemeStockAllocationComponent;
  let fixture: ComponentFixture<ThemeStockAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeStockAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeStockAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
