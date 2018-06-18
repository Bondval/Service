import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BecomeACleanerComponent} from "./become-a-cleaner.component";

const routes: Routes = [
    {path: 'become-a-cleaner', component: BecomeACleanerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecomeACleanerRoutingModule { }
