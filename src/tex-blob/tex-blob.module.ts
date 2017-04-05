import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TexBlobComponent } from './components/tex-blob.component';

@NgModule({
	declarations: [TexBlobComponent],
	imports: [CommonModule],
	exports: [TexBlobComponent],
	providers: []
})
export class TexBlobModule {}
