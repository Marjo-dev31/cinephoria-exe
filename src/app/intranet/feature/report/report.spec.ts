import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClaim } from './report';

describe('ReportClaim', () => {
  let component: ReportClaim;
  let fixture: ComponentFixture<ReportClaim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportClaim],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportClaim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
