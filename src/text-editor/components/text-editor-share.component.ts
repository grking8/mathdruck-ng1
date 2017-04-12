import { Component } from '@angular/core';

@Component({
	selector: 'text-editor-share',
	templateUrl: './text-editor-share.component.html',
	styleUrls: ['./text-editor-share.component.css']
})

export class TextEditorShareComponent {
	testClick() {
		console.log('hi, you\'ve been clicked.');
	}
}