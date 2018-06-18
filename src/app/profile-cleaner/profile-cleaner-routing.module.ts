import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileCleanerComponent} from "./profile-cleaner.component";

const routes: Routes = [
  {path:'profile',component:ProfileCleanerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCleanerRoutingModule { }
