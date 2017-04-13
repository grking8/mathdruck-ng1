import { Component } from '@angular/core';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

@Component({
	selector: 'text-editor-home',
	templateUrl: './text-editor-home.component.html',
	styleUrls: ['./text-editor-home.component.css']
})

export class TextEditorHomeComponent {
	userTex: string;
	
	constructor(private texBlobService: TexBlobService) {}
	
	setUserTex(userTex: string): void {		
		this.texBlobService.setUserTex(userTex);
	}
	
	placeholderTex = `Soient $n$ dans $\\mathbb{N}^*$,
$a_1,\\ldots,a_n,b_1,\\ldots,b_n$ des réels. Montrer que :
$$\\left\\lvert\\sum_{i=1}^{n}a_{i}b_{i}\\right\\rvert
\\leq\\sqrt{\\sum_{i=1}^{n}a_i^2}\\sqrt{\\sum_{i=1}^{n}b_i^2}$$`;
}