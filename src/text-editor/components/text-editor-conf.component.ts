import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TexBlob } from '../../tex-blob/tex-blob';
import { TexBlobService } from '../../tex-blob/services/tex-blob.service';

@Component({
	selector: 'text-editor-conf',
	templateUrl: './text-editor-conf.component.html',
	styleUrls: ['./text-editor-conf.component.css'],
	providers: [TexBlobService] // tell injector how to make a TexBlobService
})
export class TextEditorConfComponent implements OnInit {
	msg = `Thanks for sharing. The math on this page is available at 
	http://localhost:4200/shared/1`;
	
	texBlob: TexBlob;
	
	constructor(
		private texBlobService: TexBlobService,
		private route: ActivatedRoute,
		private location: Location
	) {} // does nothing except define private property and identify it as a TexBlobService injection site. Thus Angular knows to supply an instance of the TexBlobService when it creates a TexBlobComponent. Ditto for other two properties
	
	ngOnInit(): void {
		this.route.params
		.switchMap(
			(params: Params) =>
			this.texBlobService.getTexBlob(+params['id'])
		).subscribe(result => this.texBlob = result);
	}
}
