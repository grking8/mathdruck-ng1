import { Component } from '@angular/core';

@Component({
	selector: 'app-homepage',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	title = '$\\mathcal{S}$hare your $math$';
	mainBlurb = 'Write LateX in a live editor and share instantly with others.';
	mainBtnTxt = 'Start';
	
	subTitle = 'No more compiling, rendering, and uploading files.';
	subBlurb = 'Desktop LaTeX editors, e.g. TeXmaker, are ideal for writing scientific papers and publishing. However, when writing smaller texts, users can sometimes find such editors unwieldy. Moreover, sharing PDFs frequently can be time-consuming.';
	subBtnTxt = 'Learn more';
	
	symbols = [
		[
			{
				colour:'#66FF66',
				tex: '$\\pi$'
			},
			{
				colour:'#ff9900',
				tex: '$\\mathbb{N}$'
			}
		],
		[
			{
				colour:'#FF007C',
				tex: '$\\Delta$'
			},
			{
				colour:'#0066FF',
				tex: '$\\mathcal{P}$'
			}
		],
		[
			{
				colour:'#66FF66',
				tex: '$e$'
			},
			{
				colour:'#ff9900',
				tex: '$\\infty$'
			}
		],
		[
			{
				colour:'#FF007C',
				tex: '$\\partial f$'
			},
			{
				colour:'#0066FF',
				tex: '$\\varnothing$'
			}
		],
		[
			{
				colour:'#66FF66',
				tex: '$\\subset$'
			},
			{
				colour:'#ff9900',
				tex: '$\\vdots$'
			}
		]
	];	
}