import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home.component';
import { MathjaxDirective } from '../../mathjax/directives/mathjax.directive';
import { TextEditorComponent } from '../../text-editor/components/text-editor.component';


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
							],
							imports: [FormsModule]
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

