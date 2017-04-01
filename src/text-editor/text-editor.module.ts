import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MathjaxModule } from '../mathjax/mathjax.module';

import { TextEditorComponent } from './text-editor.component';

@NgModule({
	declarations: [TextEditorComponent],
	imports: [
		CommonModule,
		FormsModule,
		MathjaxModule
	],
	exports: [TextEditorComponent],
	providers: []
})
export class TextEditorModule {}