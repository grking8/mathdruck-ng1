import { Directive, ElementRef, Input } from '@angular/core';

declare var MathJax: {
	Hub: {
		Queue: (param: Object[]) => void;
	}
}

@Directive({
	selector: '[Mathjax]'
})
export class MathjaxDirective {
	  @Input() tex: string;
	  
	  constructor(private elt: ElementRef) {}
	  
	  ngOnChanges() {
		  this.elt.nativeElement.innerHTML = this.tex;
		  MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.elt.nativeElement]);
	  }
}
