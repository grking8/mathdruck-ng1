import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathjaxModule } from '../mathjax/mathjax.module';

import { TexBlobComponent } from './components/tex-blob.component';

@NgModule({
	declarations: [TexBlobComponent],
	imports: [CommonModule, MathjaxModule],
	exports: [TexBlobComponent],
	providers: []
})
export class TexBlobModule {}
