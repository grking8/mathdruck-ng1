import { Injectable } from '@angular/core';

import { TexBlob } from '../tex-blob';
import { TEXBLOBS } from '../mock-tex-blobs';

@Injectable()
export class TexBlobService {
	getTexBlob(texBlobId: number): Promise<TexBlob> {
		return Promise.resolve(TEXBLOBS[texBlobId]);
	}
	
	getTexBlobSlowly(texBlobId: number): Promise<TexBlob> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getTexBlob(texBlobId)), 3000);
		});
	}
}
