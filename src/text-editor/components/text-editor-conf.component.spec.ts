import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TextEditorConfComponent } from './text-editor-conf.component';
import { MathjaxDirective } from '../../mathjax/directives/mathjax.directive';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

describe('TextEditorConfComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorConfComponent,
		MathjaxDirective  
      ],
	  imports: [HttpModule],
	  providers: [TexBlobService]
    }).compileComponents();
  }));

  it('should create text editor conf component', async(() => {
    const fixture = TestBed.createComponent(TextEditorConfComponent);
    const textEditorConf = fixture.debugElement.componentInstance;
    expect(textEditorConf).toBeTruthy();
  }));
