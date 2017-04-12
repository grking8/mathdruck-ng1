import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TexBlob } from '../tex-blob';

@Injectable()
export class TexBlobService {
	
	private headers = new Headers({'Content-Type': 'application/json'});
	private apiUrl = 'api/texBlobs'; // URL to web api
	
	constructor(private http: Http) {}
	
	getTexBlob(texBlobId: number): Promise<TexBlob> {
		const url = `${this.apiUrl}/${texBlobId}`;
		
		var promise = this.http.get(url).toPromise();
		return promise.then(response => response.json().data as TexBlob);
	}
	
	writeTexBlob(texBlobTex: string): Promise<TexBlob> {
		var promise = this.http.post(
			this.apiUrl,
			JSON.stringify({tex: texBlobTex}),
			{headers: this.headers}
		).toPromise();
		return promise.then(response => response.json().data as TexBlob)
		.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getTexBlobSlowly(texBlobId: number): Promise<TexBlob> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getTexBlob(texBlobId)), 3000);
		});
	}
}
