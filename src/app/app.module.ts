import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextEditorModule } from '../text-editor/text-editor.module';
import { MathjaxModule } from '../mathjax/mathjax.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		TextEditorModule,
		MathjaxModule,
		AppRoutingModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
