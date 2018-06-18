import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerProfileComponent} from "./customer-profile.component";
import {ProfileComponent} from "../profile/profile.component";
import {ScheduleComponent} from "../schedule/schedule.component";
import {ContractsComponent} from "../contracts/contracts.component";
import {CouponsComponent} from "../coupons/coupons.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerProfileRoutingModule { }
