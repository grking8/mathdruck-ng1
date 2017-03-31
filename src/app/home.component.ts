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
	  '$\\mathcal{B}$',
	  '$\\mathbb{R}$',
	  '$\\beta$',
	  '$\\vdots$'
  ];
}

