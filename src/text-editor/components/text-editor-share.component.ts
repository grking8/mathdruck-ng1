import { Component, Input } from '@angular/core';

@Component({
	selector: 'text-editor-share',
	templateUrl: './text-editor-share.component.html',
	styleUrls: ['./text-editor-share.component.css']
})

export class TextEditorShareComponent {
	@Input() userTex: string;
	testClick(str: string) {
		console.log(str);
	}
}