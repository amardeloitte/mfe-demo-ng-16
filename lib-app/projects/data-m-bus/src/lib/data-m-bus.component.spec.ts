import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMBusComponent } from './data-m-bus.component';

describe('DataMBusComponent', () => {
  let component: DataMBusComponent;
  let fixture: ComponentFixture<DataMBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataMBusComponent]
    });
    fixture = TestBed.createComponent(DataMBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
