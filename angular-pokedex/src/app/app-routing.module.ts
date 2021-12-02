import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadingTemplateComponent} from '../templates/loading-template/loading-template.component';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';


const routes: Routes = [{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
