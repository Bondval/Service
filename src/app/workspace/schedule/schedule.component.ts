import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {DatePipe, Time} from '@angular/common';
import {current} from "codelyzer/util/syntaxKind";
import {Order} from "../../models/order";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import * as Rx from 'rxjs';

export class Hour {
  constructor(public time:number, public active:boolean = false , public locked:boolean = false){
  }
}

export class Day {
  constructor(public date: Date, public orders: Order[]){ }
}


let orders: Order[] = [
  {
    id: 0,
    date: new Date(2018, 0, 26),
    startTime: 10
  },
  {
    id: 1,
    date: new Date(2018, 0, 24),
    startTime: 14
  },
  {
    id: 2,
    date: new Date(2018, 0, 25),
    startTime: 8
  },
  {
    id: 3,
    date: new Date(2018, 0, 22),
    startTime: 16
  },
  {
    id: 4,
    date: new Date(2018, 0, 23),
    startTime: 12
  }
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [DatePipe],
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
      state('show', style({
        opacity: 1, transform: 'translateY(50%)'
      })),
      state('hide', style({
        opacity: 0, transform: 'translateY(-50%)'
      })),
      transition('* <=> *', animate('500ms ease-in')),
    ]),
  ],
})

export class ScheduleComponent implements OnInit {
  public hours: Hour[] = [];
  public hourList: Hour[] = this.hours;
  public dayList: Day[] = [];
  public currentDate: Date = new Date();
  public popup: boolean = false;
  public selectedHours:Array<boolean> = [];
  public openState:boolean = false;
  public party: string = "left";
  public animationState: string = 'hide';
  public finishInfo: string = "-";
  public selectToTime: string = '15:30';
  public selectFromTime: string = '13:40';
  public selectedDay: Day;
  public container = document.getElementById("containerDate");


  constructor(private datePipe: DatePipe) {
    this.finishInfo = this.selectFromTime + '-' + this.selectToTime;
  }

  ngOnInit():void {
    this.onCalendarInit();
    for(let i = 0; i<24; i++){
       this.hours.push(new Hour(i));
    }
  }

  onSelectDay(day: Day) {
    this.selectedDay = day;
    // let hours = Rx.Observable.merge(day.orders.map(val => val.startTime), this.hourList.map(val => val.time));
            // .map(val => val.isChecked = true);
    //Rx.Observable.fromArray(hours)
      //  .distinct();
        //orders.filter(order => order.date.getTime() === day.getTime());
  }

  onCalendarInit() {
   // let calendarHtml = '';

    for (let i = 0; i < 28;  i++) {
      let day = new Date();
      day.setHours(0,0,0,0);
      day.setDate(day.getDate() + i);

      let hours = orders.filter(order => order.date.getTime() === day.getTime());

      this.dayList.push(new Day(day, hours));


      // calendarHtml += `<div _ngcontent-c8="" class="provider-column">
      //             <div _ngcontent-c8="" class="provider-columndate">${this.datePipe.transform(this.currentDate, 'EEE')}. ${this.datePipe.transform(this.currentDate, 'MMM')} ${this.datePipe.transform(this.currentDate, 'd')}</div>
      //             <div _ngcontent-c8="" id="slots" class="slots scroller scrollbar-hover">
      //               <div _ngcontent-c8="" class="scrollbar"></div>
      //               <button _ngcontent-c8="" type="button" class="add-time btn u-btn-outline-primary timeslot" data-hour="16">+</button>
      //             </div>
      //         </div>`;
      //this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
    //document.getElementById("calendar").insertAdjacentHTML('afterbegin', calendarHtml);

    // let btns = document.getElementsByClassName("add-time");
    // for (let i=0; i < btns.length; i++){
    //   btns[i].addEventListener('click',(e) => {
    //     this.togglePopup( true);
    //     this.SelectedDay = e.currentTarget;
    //   },false);
    //   // btns[i].addEventListener('click',(e) => this.onWrite(e),false);
    // }
  };

  togglePopup(isOpen = null) {
    if (isOpen === null) isOpen = !this.popup;
    if (isOpen) {
      this.popup = true;
      this.animationState = 'show';
    } else {
      this.animationState = 'hide';
      setTimeout(() => {
        this.popup = false;
      }, 500);
    }
  }

  onRight() {
    this.party = "right";
    let loki = document.getElementById('calendar');
    if (loki.style.transform == "translateX(-98%)") {
      this.party = "right-second";
    }
    if (loki.style.transform == "translateX(-196%)") {
      this.party = "right-third";
    }

  }

  onLeft() {
    this.party = "left";
    let loki = document.getElementById('calendar');
    if (loki.style.transform == "translateX(-196%)") {
      this.party = "right";
    }
    if (loki.style.transform == "translateX(-294%)") {
      this.party = "right-second";
    }
  }

  // onWriteTime(){
  //   this.finishInfo = this.selectFromTime + '-' + this.selectToTime;
    // this.onWrite();
  // }

  // onWrite() {
  //   let addTime = '';
  //   addTime = `<button _ngcontent-c8="" type="button" class="add-time btn u-btn-outline-primary timeslot" data-hour="16">${this.finishInfo}</button>`;
  //   this.SelectedDay.insertAdjacentHTML('beforebegin', addTime);
  // }

}
