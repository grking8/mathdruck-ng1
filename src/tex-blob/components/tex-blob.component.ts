import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

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
	
	constructor(private texBlobService: TexBlobService) {} // does nothing except define private property and identify it as a TexBlobService injection site. Thus Angular knows to supply an instance of the TexBlobService when it creates a TexBlobComponent
	
	getTexBlob(): void {
		var promise = this.texBlobService.getTexBlobSlowly(0);
		promise.then(result => this.texBlob = result);
		// result is what is returned once the promised is resolved
	}
	
	ngOnInit(): void {
		this.getTexBlob();
	}
}
