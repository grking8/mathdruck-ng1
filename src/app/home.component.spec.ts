import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MathjaxDirective } from '../mathjax/mathjax.directive';
import { TextEditorComponent } from '../text-editor/text-editor.component';


describe(
	'HomeComponent',
	() => {
		beforeEach(
			async(
				() => {
					TestBed.configureTestingModule(
						{
							declarations: [
								HomeComponent,
								MathjaxDirective,
								TextEditorComponent
							]
						}
					).compileComponents();
				}
			)
		);
		it(
			'should create home component',
			async(
				() => {
					const fixture = TestBed.createComponent(HomeComponent);
					const home = fixture.debugElement.componentInstance;
					expect(home).toBeTruthy();
				}
			)
		)
	}
)

