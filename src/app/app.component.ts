import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathDruck';
  
  symbols = [
	  '$\\alpha$',
	  '$\\mathbb{N}$',
	  '$\\mathcal{B}$',
	  '$\\mathbb{R}$',
	  '$\\beta$',
	  '$\\vdots$'
  ];
}

