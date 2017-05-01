import { TestBed, async } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { FooterComponent } from '../../footer/components/footer.component';

describe('AboutComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
		FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create about component', async(() => {
    const fixture = TestBed.createComponent(AboutComponent);
    const about = fixture.debugElement.componentInstance;
    expect(about).toBeTruthy();
  }));