import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { MathjaxModule } from '../mathjax/mathjax.module';

import { TexBlobComponent } from './components/tex-blob.component';

@NgModule({
	declarations: [TexBlobComponent],
	imports: [
		CommonModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		MathjaxModule
	],
	exports: [TexBlobComponent],
	providers: []
})
export class TexBlobModule {}
