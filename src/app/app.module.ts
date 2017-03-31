import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor.component';

@NgModule({
	declarations: [AppComponent, TextEditorComponent],
	imports: [BrowserModule],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
