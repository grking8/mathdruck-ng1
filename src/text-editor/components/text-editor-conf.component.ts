import { Component } from '@angular/core';

@Component({
	selector: 'text-editor-conf',
	templateUrl: './text-editor-conf.component.html',
	styleUrls: ['./text-editor-conf.component.css']
})
export class TextEditorConfComponent {
	msg = `Thanks for sharing! The math on this page is available at 
	http://localhost:4200/shared/1`;
}
