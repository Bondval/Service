import { Component,HostListener,ElementRef, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {ModalService} from "../_services/modal.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('AnimationTop', [
      state('hide', style({
        opacity: 0, transform: 'translateY(-50%)'
      })),
      state('show', style({
        opacity: 1, transform: 'translateY(50%)'
      })),
      transition('hide <=> show', animate('500ms ease-in')),
    ]),
  ],
})

export class HomepageComponent implements OnInit {
  public popup : boolean = false;
  public animationState: string = 'hide';
  public animationScrollTop: string = 'hide';
  public scrollPosition: number = 0;

  togglePopup(isOpen = null){
    if(isOpen === null) isOpen = !this.popup;
    let html = document.getElementsByTagName('html')[0];
    if(isOpen) {
      this.popup = true;
      this.animationState = 'show';
      html.classList.add("no-scroll");
    } else {
      this.animationState = 'hide';
      setTimeout(()=> {
        this.popup = false;
        html.classList.remove("no-scroll");
      }, 500);
    }
  }

  constructor(public  modalService: ModalService) {}

  ngOnInit() {
  }

}
