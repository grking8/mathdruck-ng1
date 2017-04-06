import { TestBed, async } from '@angular/core/testing';

import { TextEditorConfComponent } from './text-editor-conf.component';

describe('TextEditorConfComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorConfComponent  
      ]
    }).compileComponents();
  }));

  it('should create text editor conf component', async(() => {
    const fixture = TestBed.createComponent(TextEditorConfComponent);
    const textEditorConf = fixture.debugElement.componentInstance;
    expect(textEditorConf).toBeTruthy();
  }));
