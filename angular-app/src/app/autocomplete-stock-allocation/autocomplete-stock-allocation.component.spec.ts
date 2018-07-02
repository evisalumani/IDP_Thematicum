import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteStockAllocationComponent } from './autocomplete-stock-allocation.component';

describe('AutocompleteStockAllocationComponent', () => {
  let component: AutocompleteStockAllocationComponent;
  let fixture: ComponentFixture<AutocompleteStockAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteStockAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteStockAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
