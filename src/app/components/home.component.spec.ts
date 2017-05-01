import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { MathjaxDirective } from '../../mathjax/directives/mathjax.directive';

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
								FooterComponent,
								MathjaxDirective
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

