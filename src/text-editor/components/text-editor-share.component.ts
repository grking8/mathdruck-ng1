import { Component, Input } from '@angular/core';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

@Component({
	selector: 'text-editor-share',
	templateUrl: './text-editor-share.component.html',
	styleUrls: ['./text-editor-share.component.css']
})

export class TextEditorShareComponent {
	@Input() userTex: string;
	
	constructor(private texBlobService: TexBlobService) {}
	
	setUserTex(userTex: string): void {		
		this.texBlobService.setUserTex(userTex);
	}
}