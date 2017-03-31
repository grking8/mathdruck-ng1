import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextEditorModule } from '../text-editor/text-editor.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		TextEditorModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
