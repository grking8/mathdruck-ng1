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
	subBlurb = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidunt ut labore et dolore magana aliqua. Sed ut perspiciatis unde omnis iste natus error vit voluptatem accusantium doloremque laudantium.';
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