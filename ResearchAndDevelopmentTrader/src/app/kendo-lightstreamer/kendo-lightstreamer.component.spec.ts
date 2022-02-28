import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoLightstreamerComponent } from './kendo-lightstreamer.component';

describe('KendoLightstreamerComponent', () => {
  let component: KendoLightstreamerComponent;
  let fixture: ComponentFixture<KendoLightstreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoLightstreamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoLightstreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
