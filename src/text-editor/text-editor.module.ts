import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MathjaxModule } from '../mathjax/mathjax.module';
import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TexBlobModule } from '../tex-blob/tex-blob.module';
import { FooterModule } from '../footer/footer.module';

import { TextEditorComponent } from './components/text-editor.component';
import { TextEditorHomeComponent } from './components/text-editor-home.component';
import { TextEditorConfComponent } from './components/text-editor-conf.component';

import { TexBlobService } from '../tex-blob/services/tex-blob.service';
import { TexBlobResolverService } from '../tex-blob/services/tex-blob-resolver.service';

@NgModule({
	declarations: [
		TextEditorComponent, // root component for this module
		TextEditorHomeComponent,
		TextEditorConfComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MathjaxModule,
		FooterModule,
		TextEditorRoutingModule
	],
	exports: [
		TextEditorComponent,
		TextEditorHomeComponent,
		TextEditorConfComponent
	],
	providers: [
		TexBlobService,
		TexBlobResolverService
	]
})
export class TextEditorModule {}