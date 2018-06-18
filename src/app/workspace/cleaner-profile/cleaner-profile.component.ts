import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";


@Component({
  selector: 'app-cleaner-profile',
  templateUrl: './cleaner-profile.component.html',
  styleUrls: ['./cleaner-profile.component.scss']
})
export class CleanerProfileComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
