import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TextEditorShareComponent } from './text-editor-share.component';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

describe('TextEditorShareComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorShareComponent  
      ],
	  imports: [HttpModule],
	  providers: [TexBlobService]
    }).compileComponents();
  }));

  it('should create text editor share component', async(() => {
    const fixture = TestBed.createComponent(TextEditorShareComponent);
    const share = fixture.debugElement.componentInstance;
    expect(share).toBeTruthy();
  }));