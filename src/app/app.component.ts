/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}*/

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathDruck';
  blurb = 'Create and share your math.';
  
  symbols = [
	  '$\\alpha$',
	  '$\\mathbb{N}$',
	  '$\\mathcal{B}$',
	  '$\\mathbb{R}$',
	  '$\\beta$',
	  '$\\ldots$'
  ];
}

