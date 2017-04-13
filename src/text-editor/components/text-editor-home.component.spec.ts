import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MathjaxModule } from '../../mathjax/mathjax.module';

import { TextEditorHomeComponent } from './text-editor-home.component';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

describe('TextEditorHomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEditorHomeComponent
      ],
	  imports: [
	  	FormsModule,
		HttpModule,
		MathjaxModule    
	  ],
	  providers: [TexBlobService]
    }).compileComponents();
  }));

  it('should create text editor home component', async(() => {
    const fixture = TestBed.createComponent(TextEditorHomeComponent);
    const textEditorHome = fixture.debugElement.componentInstance;
    expect(textEditorHome).toBeTruthy();
  }));