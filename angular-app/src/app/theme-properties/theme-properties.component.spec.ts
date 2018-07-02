import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePropertiesComponent } from './theme-properties.component';

describe('ThemePropertiesComponent', () => {
  let component: ThemePropertiesComponent;
  let fixture: ComponentFixture<ThemePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
