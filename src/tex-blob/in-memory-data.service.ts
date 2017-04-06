import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let texBlobs = [
			{
				id: 1,
				tex: 'Soit $x \\in \\mathbb{R}$'
			},
			{
				id: 2,
				tex: 'Soit $n \\in \\mathbb{N}$'
			},
			{
				id: 3,
				tex: 'Supposons que $f$ est une fonction complexe'
			}
		];
		return {texBlobs};
	}
}
