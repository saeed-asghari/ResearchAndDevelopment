import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesRowStockComponent } from './changes-row-stock.component';

describe('ChangesRowStockComponent', () => {
  let component: ChangesRowStockComponent;
  let fixture: ComponentFixture<ChangesRowStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesRowStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesRowStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
