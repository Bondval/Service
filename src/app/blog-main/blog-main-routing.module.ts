import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogMainComponent} from "./blog-main.component";

const routes: Routes = [
    {path: 'blog-main', component: BlogMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogMainRoutingModule { }
