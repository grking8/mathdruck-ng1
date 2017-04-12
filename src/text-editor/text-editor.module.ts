import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MathjaxModule } from '../mathjax/mathjax.module';
import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TexBlobModule } from '../tex-blob/tex-blob.module';

import { TextEditorComponent } from './components/text-editor.component';
import { TextEditorHomeComponent } from './components/text-editor-home.component';
import { TextEditorConfComponent } from './components/text-editor-conf.component';
import { TextEditorShareComponent } from './components/text-editor-share.component';

@NgModule({
	declarations: [
		TextEditorComponent, // root component for this module
		TextEditorHomeComponent,
		TextEditorConfComponent,
		TextEditorShareComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MathjaxModule,
		TextEditorRoutingModule
	],
	exports: [
		TextEditorComponent,
		TextEditorHomeComponent,
		TextEditorConfComponent,
		TextEditorShareComponent
	],
	providers: []
})
export class TextEditorModule {}