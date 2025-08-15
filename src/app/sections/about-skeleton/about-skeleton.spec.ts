import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSkeleton } from './about-skeleton';

describe('AboutSkeleton', () => {
  let component: AboutSkeleton;
  let fixture: ComponentFixture<AboutSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
