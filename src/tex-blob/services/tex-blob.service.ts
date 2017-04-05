import { Injectable } from '@angular/core';

import { TexBlob } from '../tex-blob';
import { TEXBLOBS } from '../mock-tex-blobs';

@Injectable()
export class TexBlobService {
	getTexBlob(texBlobId: number): TexBlob {
		return TEXBLOBS[texBlobId];
	}
}
