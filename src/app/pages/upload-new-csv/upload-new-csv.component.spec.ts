import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNewCsvComponent } from './upload-new-csv.component';

describe('UploadNewCsvComponent', () => {
  let component: UploadNewCsvComponent;
  let fixture: ComponentFixture<UploadNewCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadNewCsvComponent]
    });
    fixture = TestBed.createComponent(UploadNewCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
