import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MathjaxModule } from '../mathjax/mathjax.module';
import { FooterModule } from '../footer/footer.module';

import { TexBlobComponent } from './components/tex-blob.component';

@NgModule({
	declarations: [TexBlobComponent],
	imports: [
		CommonModule,
		HttpModule,
		MathjaxModule,
		FooterModule
	],
	exports: [TexBlobComponent],
	providers: []
})
export class TexBlobModule {}
