import { Component } from '@angular/core';

@Component({
	selector: 'text-editor',
	templateUrl: './text-editor.component.html',
	styleUrls: ['./text-editor.component.css']
})

export class TextEditorComponent {
	userTex: string;
	
	placeholder = `Soient $n$ dans $\\mathbb{N}^*$,
$a_1,\\ldots,a_n,b_1,\\ldots,b_n$ des réels. Montrer que :
$$\\left\\lvert\\sum_{i=1}^{n}a_{i}b_{i}\\right\\rvert
\\leq\\sqrt{\\sum_{i=1}^{n}a_i^2}\\sqrt{\\sum_{i=1}^{n}b_i^2}$$`;
}