import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MathjaxModule } from '../../mathjax/mathjax.module';

import { TexBlobComponent } from './tex-blob.component';

describe('TexBlobComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TexBlobComponent  
      ],
	  imports: [MathjaxModule, RouterTestingModule]
    }).compileComponents();
  }));

  it('should create tex blob component', async(() => {
    const fixture = TestBed.createComponent(TexBlobComponent);
    const texBlob = fixture.debugElement.componentInstance;
    expect(texBlob).toBeTruthy();
  }));
