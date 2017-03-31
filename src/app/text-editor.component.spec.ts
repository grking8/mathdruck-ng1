import { TestBed, async } from '@angular/core/testing';

import { TextEditorComponent } from './text-editor.component';

describe('TextEditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorComponent
      ],
    }).compileComponents();
  }));

  it('should create the text editor component', async(() => {
    const fixture = TestBed.createComponent(TextEditorComponent);
    const textEditor = fixture.debugElement.componentInstance;
    expect(textEditor).toBeTruthy();
  }));