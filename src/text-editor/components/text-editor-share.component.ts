import { Component, Input } from '@angular/core';

import { TexBlobService } from '../../tex-blob/services/tex-blob.service';
import { TexBlob } from '../../tex-blob/tex-blob';

@Component({
	selector: 'text-editor-share',
	templateUrl: './text-editor-share.component.html',
	styleUrls: ['./text-editor-share.component.css'],
	providers: [TexBlobService]
})

export class TextEditorShareComponent {
	@Input() userTex: string;
	
	constructor(private texBlobService: TexBlobService) {}
	
	shareId: number;
	
	share(str: string): void {
		var promise = this.texBlobService.writeTexBlob(str);
		promise.then(result => this.shareId = result.id);
	}
	
	

	
}