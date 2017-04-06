// sibling to text-editor.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextEditorHomeComponent } from './components/text-editor-home.component';

const textEditorRoutes: Routes = [
	{
		path: 'editor',
		component: TextEditorHomeComponent
		
	}
];

@NgModule(
	{
		imports: [RouterModule.forChild(textEditorRoutes)],
		exports: [RouterModule]
	}
)
export class TextEditorRoutingModule {}