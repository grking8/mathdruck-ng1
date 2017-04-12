import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TextEditorShareComponent } from './text-editor-share.component';

describe('TextEditorShareComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorShareComponent  
      ],
	  imports: [HttpModule]
    }).compileComponents();
  }));

  it('should create text editor share component', async(() => {
    const fixture = TestBed.createComponent(TextEditorShareComponent);
    const share = fixture.debugElement.componentInstance;
    expect(share).toBeTruthy();
  }));