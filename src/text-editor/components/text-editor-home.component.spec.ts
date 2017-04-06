import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { MathjaxModule } from '../../mathjax/mathjax.module';

import { TextEditorHomeComponent } from './text-editor-home.component';

describe('TextEditorHomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorHomeComponent  
      ],
	  imports: [FormsModule, MathjaxModule]
    }).compileComponents();
  }));

  it('should create text editor home component', async(() => {
    const fixture = TestBed.createComponent(TextEditorHomeComponent);
    const textEditorHome = fixture.debugElement.componentInstance;
    expect(textEditorHome).toBeTruthy();
  }));