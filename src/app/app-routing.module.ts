import { RouterModule, Routes } from "@angular/router";
import{NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './_guards/index';
import { HomepageComponent } from "./homepage/homepage.component";
import {BecomeACleanerComponent} from "./become-a-cleaner/become-a-cleaner.component";

const routes : Routes = [
    { path: 'become-a-cleaner', component:BecomeACleanerComponent, canActivate: [AuthGuard]},
    { path: '', component:HomepageComponent, canActivate: [AuthGuard]}
    //, canActivate: [AuthGuard]
    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
