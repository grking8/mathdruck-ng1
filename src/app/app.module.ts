import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextEditorModule } from '../text-editor/text-editor.module';
import { MathjaxModule } from '../mathjax/mathjax.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';

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
