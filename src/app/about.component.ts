import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent {  
	blurb = 'Description of what the app does and how it works.';
}

