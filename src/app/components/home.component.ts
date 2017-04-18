import { Component } from '@angular/core';

@Component({
	selector: 'app-homepage',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {  
  symbols = [
	  '$\\alpha$',
	  '$\\mathbb{N}$',
	  '$\\mathcal{A}$',
	  '$\\mathbb{R}$',
	  '$\\mathcal{P}$',
	  '$\\mu$',
	  '$\\mathbb{Z}$',
	  '$x$',
	  '$f$',
	  '$\\vdots$'
  ];
}

