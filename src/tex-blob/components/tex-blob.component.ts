import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TexBlob } from '../tex-blob';
import { TexBlobService } from '../services/tex-blob.service';

@Component({
	selector: 'tex-blob',
	templateUrl: './tex-blob.component.html',
	styleUrls: ['./tex-blob.component.css'],
	providers: [TexBlobService] // tell injector how to make a TexBlobService
})

export class TexBlobComponent implements OnInit {
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
