import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesGridComponent } from './tiles-grid.component';

describe('TilesGridComponent', () => {
  let component: TilesGridComponent;
  let fixture: ComponentFixture<TilesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
