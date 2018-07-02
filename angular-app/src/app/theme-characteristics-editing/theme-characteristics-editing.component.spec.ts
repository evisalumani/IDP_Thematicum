import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCharacteristicsEditingComponent } from './theme-characteristics-editing.component';

describe('ThemeCharacteristicsEditingComponent', () => {
  let component: ThemeCharacteristicsEditingComponent;
  let fixture: ComponentFixture<ThemeCharacteristicsEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCharacteristicsEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCharacteristicsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
