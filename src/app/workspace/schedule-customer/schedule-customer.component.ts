import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-schedule-customer',
  templateUrl: './schedule-customer.component.html',
  styleUrls: ['./schedule-customer.component.scss'],
  animations: [
    trigger('AnimationRight', [
      state('left', style({
        transform: 'translateX(0)'
      })),
      state('right', style({
        transform: 'translateX(-98%)'
      })),
      state('right-second', style({
        transform: 'translateX(-196%)'
      })),
      state('right-third', style({
        transform: 'translateX(-294%)'
      })),
      transition('* <=> *', animate('500ms ease-in')),
    ]),
  ],
})

export class ScheduleCustomerComponent implements OnInit {
  public popup : boolean = false;
  public party : string ="left";
  public animationState: string = 'hide';

  togglePopup(isOpen = null){
    if(isOpen === null) isOpen = !this.popup;
    if(isOpen) {
      this.popup = true;
      this.animationState = 'show';
    } else {
      this.animationState = 'hide';
      setTimeout(()=> {
        this.popup = false;
      }, 500);
    }
  }

  onRight(){
    this.party = "right";
    let loki = document.getElementById('calendar');
    if(loki.style.transform == "translateX(-98%)"){
      this.party = "right-second";
    }
    if(loki.style.transform == "translateX(-196%)"){
      this.party = "right-third";
    }
  }

  onLeft(){
    this.party = "left";
    let loki = document.getElementById('calendar');
    if(loki.style.transform == "translateX(-196%)"){
      this.party = "right";
    }
    if(loki.style.transform == "translateX(-294%)"){
      this.party = "right-second";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
