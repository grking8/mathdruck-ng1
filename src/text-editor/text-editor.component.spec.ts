import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { TextEditorComponent } from './text-editor.component';

describe('TextEditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorComponent
      ],
	  imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create text editor component', async(() => {
    const fixture = TestBed.createComponent(TextEditorComponent);
    const textEditor = fixture.debugElement.componentInstance;
    expect(textEditor).toBeTruthy();
  }));