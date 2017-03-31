// sibling to app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'home', // just the name of the url 
		component: HomeComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule(
	{
		// no declarations as these are responsibility of companion module
		imports: [RouterModule.forRoot(routes)],
		exports: [RouterModule] // allow components in companion module i.e. app.module.ts access to Router declarables e.g. RouterLink and RouterOutlet
	}
)
export class AppRoutingModule {}