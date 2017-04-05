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
		this.texBlob = this.texBlobService.getTexBlob(0);
	}
	
	ngOnInit(): void {
		this.getTexBlob();
	}
}
