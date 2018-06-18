import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { CouponsComponent } from './coupons/coupons.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CleanerProfileComponent } from './cleaner-profile/cleaner-profile.component';
import { PaidComponent } from './paid/paid.component';
import { ScheduleCustomerComponent } from './schedule-customer/schedule-customer.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ],
  declarations: [CouponsComponent, CustomerProfileComponent, CleanerProfileComponent, PaidComponent, ScheduleCustomerComponent,]
})
export class WorkspaceModule { }
