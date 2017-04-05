// sibling to app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { TextEditorComponent } from '../text-editor/components/text-editor.component';
import { TexBlobComponent } from '../tex-blob/components/tex-blob.component';

const routes: Routes = [
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'home', 
		component: HomeComponent
	},
	{
		path: 'editor',
		component: TextEditorComponent
	},
	{
		path: 'shared/:id',
		component: TexBlobComponent
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