import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TexBlob } from '../tex-blob';

@Injectable()
export class TexBlobService {
	
	private apiUrl = 'http://mathdruck.api.com/texblobs'; // URL to web api
	
	userTex: string;
	
	constructor(private http: Http) {}
	
	getTexBlob(texBlobId: number): Promise<TexBlob> {
		const url = `${this.apiUrl}/${texBlobId}`;
		
		var promise = this.http.get(url).toPromise();
		return promise.then(response => response.json() as TexBlob);
	}
	
	setUserTex(userTex: string): void {
		this.userTex = userTex;
	}
	
	getUserTex(): string {
		return this.userTex;
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
