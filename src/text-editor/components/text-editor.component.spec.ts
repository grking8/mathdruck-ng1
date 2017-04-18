import { TestBed, async } from '@angular/core/testing';

import { TextEditorComponent } from './text-editor.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TextEditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorComponent  
      ],
	  imports: [
	  	RouterTestingModule
	  ]
    }).compileComponents();
  }));

  it('should create text editor component', async(() => {
    const fixture = TestBed.createComponent(TextEditorComponent);
    const textEditor = fixture.debugElement.componentInstance;
    expect(textEditor).toBeTruthy();
  }));