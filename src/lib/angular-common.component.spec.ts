import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCommonComponent } from './angular-common.component';

describe('AngularCommonComponent', () => {
  let component: AngularCommonComponent;
  let fixture: ComponentFixture<AngularCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCommonComponent]
    });
    fixture = TestBed.createComponent(AngularCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
