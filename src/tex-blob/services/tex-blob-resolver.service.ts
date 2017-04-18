import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { TexBlobService } from '../../tex-blob/services/tex-blob.service';
import { TexBlob } from '../tex-blob';

@Injectable()
export class TexBlobResolverService implements Resolve<TexBlob> {
	
	private headers = new Headers({'Content-Type': 'application/json'});
	private apiUrl = 'http://mathdruck.api.com/texblobs'; // URL to web api
	
	constructor(
		private http: Http,
		private texBlobService: TexBlobService
	) {}
	
	resolve(): Observable<TexBlob> {
		return this.http.post(
			this.apiUrl,
			JSON.stringify({tex: this.texBlobService.getUserTex()}),
			{headers: this.headers}
		).map(response => response.json() as TexBlob)
		.catch(err => Observable.throw(err.json().error));
	}
}

