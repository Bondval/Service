import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public modalState : string = 'info';

  setState(state){
    this.modalState = state;
  }

  constructor() { }

  ngOnInit() {
  }

}
