import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkspaceComponent} from "./workspace.component";
import {ProfileComponent} from "./profile/profile.component";
import {ContractsComponent} from "./contracts/contracts.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {CouponsComponent} from "./coupons/coupons.component";
import {CleanerProfileComponent} from "./cleaner-profile/cleaner-profile.component";
import {CustomerProfileComponent} from "./customer-profile/customer-profile.component";
import {SearchEngineComponent} from "../search-engine/search-engine.component";
import {MessagesComponent} from "./messages/messages.component";
import {MessageComponent} from "../message/message.component";
import {PaidComponent} from "./paid/paid.component";
import {ScheduleCustomerComponent} from "./schedule-customer/schedule-customer.component";

const routes: Routes = [
  { path: 'workspace', component: WorkspaceComponent,children:[
    { path:'customer',component:CustomerProfileComponent,children:[
      { path:'profile',component:ProfileComponent},
      { path:'schedule',component:ScheduleCustomerComponent},
      { path:'contracts',component:ContractsComponent},
      { path:'coupons',component:CouponsComponent},
      { path:'get-clean',component:SearchEngineComponent},
      { path:'message',component:MessageComponent},
    ]},
    { path:'cleaner',component:CleanerProfileComponent,children:[
      { path:'profile',component:ProfileComponent},
      { path:'schedule',component:ScheduleComponent},
      { path:'contracts',component:ContractsComponent},
      { path:'coupons',component:CouponsComponent},
      { path:'message',component:MessageComponent},
      { path:'paid',component:PaidComponent},
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
