import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRoutingModule } from './message-routing.module';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
    BrowserModule,
  ],
  declarations: []
})
export class MessageModule { }
