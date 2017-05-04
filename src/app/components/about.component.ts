import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent {  
	blurb = [
		'Desktop LaTeX editors, e.g. TeXmaker, are ideal for writing scientific papers and publishing. However, when writing smaller texts, users can sometimes find such editors unwieldy. Moreover, sharing PDFs frequently can be time-consuming.',
		'Mathdruck allows users to write LaTeX directly into their browser and see the results as they type. Once done, they can share their work with others by sending them a URL.',
		'The app is aimed at students, researchers, and teachers who need to write math. For example, some students decide they wish to work on a homework assignment together and set up a group chat. They usually upload to the chat images containing their math, whether handwritten or typed.',
		'With Mathdruck, they can instead simply type their math in one tab, and copy and paste a URL into another tab. The others in the group can then see that person\'s work by simply clicking on the URL.'
	]
}

