import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicTableComponent } from './nic-table.component';

describe('NicTableComponent', () => {
  let component: NicTableComponent;
  let fixture: ComponentFixture<NicTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NicTableComponent]
    });
    fixture = TestBed.createComponent(NicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
