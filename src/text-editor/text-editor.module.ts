import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TextEditorComponent } from './text-editor.component';

@NgModule({
	declarations: [TextEditorComponent],
	imports: [CommonModule, FormsModule],
	exports: [TextEditorComponent],
	providers: []
})
export class TextEditorModule {}