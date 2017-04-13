// sibling to text-editor.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextEditorHomeComponent } from './components/text-editor-home.component';
import { TextEditorConfComponent } from './components/text-editor-conf.component';
import { TexBlobResolverService } from '../tex-blob/services/tex-blob-resolver.service';

const textEditorRoutes: Routes = [
	{
		path: 'editor',
		component: TextEditorHomeComponent
	},
	{
		path: 'conf',
		component: TextEditorConfComponent,
		resolve: {
			texBlob: TexBlobResolverService
		}
	}
];

@NgModule(
	{
		imports: [RouterModule.forChild(textEditorRoutes)],
		exports: [RouterModule]
	}
)
export class TextEditorRoutingModule {}