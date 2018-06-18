import {Time} from "@angular/common";

export class Order {
  id: number;
  date: Date;
  startTime: number;
  endTime?: number;
  customerId?: number;
  cleanerId?: number;
}