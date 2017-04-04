import { TestBed, async } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ],
    }).compileComponents();
  }));

  it('should create about component', async(() => {
    const fixture = TestBed.createComponent(AboutComponent);
    const about = fixture.debugElement.componentInstance;
    expect(about).toBeTruthy();
  }));