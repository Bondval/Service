import {Order} from "./order";
import {Time} from "@angular/common";


export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  date: Date;

  orders: Order[];
}