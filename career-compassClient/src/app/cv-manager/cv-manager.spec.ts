import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvManager } from './cv-manager';

describe('CvManager', () => {
  let component: CvManager;
  let fixture: ComponentFixture<CvManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
