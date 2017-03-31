import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEditorComponent } from './text-editor.component';

@NgModule({
	declarations: [TextEditorComponent],
	imports: [CommonModule],
	exports: [TextEditorComponent],
	providers: []
})
export class TextEditorModule {}