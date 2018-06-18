import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
