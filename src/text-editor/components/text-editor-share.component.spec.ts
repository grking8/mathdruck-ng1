import { TestBed, async } from '@angular/core/testing';

import { TextEditorShareComponent } from './text-editor-share.component';

describe('TextEditorShareComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorShareComponent  
      ]
    }).compileComponents();
  }));

  it('should create text editor share component', async(() => {
    const fixture = TestBed.createComponent(TextEditorShareComponent);
    const share = fixture.debugElement.componentInstance;
    expect(share).toBeTruthy();
  }));