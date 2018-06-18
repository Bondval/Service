import {Component, EventEmitter, OnInit, Output,Input} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {AuthService} from "../_services/auth.service";
import {Observable} from "rxjs/Observable";
import {ModalService} from "../_services/modal.service";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('AnimationTop', [
      state('small', style({
        opacity: 0,
      })),
      state('large', style({
        opacity: 1,
      })),
      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ],
})

export class HeaderComponent implements OnInit {
  @Output() switchLanguage: EventEmitter<any> =  new EventEmitter<any>();
  menuVisible = {helpCenter: false, hamburger: false, dropdown:false, languagesDropdown:false};
  public animationState: string = 'small';

  constructor( public authService: AuthService, public modalService: ModalService) {
  }

  toggleMenu(name, status = null){
    if(status === null) {
      this.menuVisible[name] = !this.menuVisible[name];
    } else {
      this.menuVisible[name] = status;
    }
    if(this.menuVisible.helpCenter === true) {
      this.animationState = 'large';
    }
    else{
      this.animationState = 'small';
    }
  }

  ngOnInit() {
  }
}
