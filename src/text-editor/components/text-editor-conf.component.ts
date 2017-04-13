import { Component, OnInit } from '@angular/core';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

@Component({
	selector: 'text-editor-conf',
	templateUrl: './text-editor-conf.component.html',
	styleUrls: ['./text-editor-conf.component.css']
})
export class TextEditorConfComponent implements OnInit {
	
	constructor(private texBlobService: TexBlobService) {}
	
	ngOnInit() {
		console.log(this.texBlobService.getUserTex());
	}
	
	msg = `Thanks for sharing. Your math is available at
	http://localhost:4200/shared/1`;
	
	tex = `$\\begin{align*}
	\\left(a_ix+b_i\\right)^2&=
	a_i^2x^2+b_i^2+2a_ib_ix\\\\
	\\Rightarrow\\sum_{i=1}^n\\left(a_ix+b_i\\right)^2
	&=\\sum_{i=1}^n\\left(a_i^2x^2+b_i^2+2a_ib_ix\\right)
	\\end{align*}$
	<br><br>
	Or,
	<br><br>
	$\\begin{align*}
	\\sum_{i=1}^n\\left(a_i^2x^2+b_i^2+2a_ib_ix\\right)
	&=\\left(\\sum_{i=1}^na_i^2\\right)x^2
	+\\left(2\\sum_{i=1}^na_ib_i\\right)x\\\\
	&+\\sum_{i=1}^nb_i^2
	\\end{align*}$
	<br><br>
	D'où
	<br><br>
	$$\\left(2\\sum_{i=1}^na_ib_i\\right)^2
	-4\\sum_{i=1}^na_i^2\\sum_{i=1}^nb_i^2\\leq0$$`;
}
