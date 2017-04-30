import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TextEditorModule } from '../text-editor/text-editor.module';
import { MathjaxModule } from '../mathjax/mathjax.module';
import { TexBlobModule } from '../tex-blob/tex-blob.module';
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
		NgbModule.forRoot(),
		TextEditorModule,
		MathjaxModule,
		TexBlobModule,
		AppRoutingModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
