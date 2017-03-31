import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathjaxDirective } from './mathjax.directive';

@NgModule({
	declarations: [MathjaxDirective],
	imports: [CommonModule],
	exports: [MathjaxDirective],
	providers: []
})
export class MathjaxModule {}
