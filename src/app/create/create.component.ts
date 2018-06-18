import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { HttpService } from '../_services/http.service';
import {AuthService} from "../_services/auth.service";
import {ModalService} from "../_services/modal.service";

@Component({
  moduleId: module.id,
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../login/login-create.component.scss'],
  exportAs: 'appCreate',
  animations: [
    trigger('AnimationTop', [
      state('small', style({
        opacity: 0, transform: 'translateY(-100%)'
      })),
      state('large', style({
        opacity: 1, transform: 'translateY(0)'
      })),
      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ],
  providers: [HttpService]
})

export class CreateComponent implements OnInit {
  loading = false;
  public animationState: string = 'small';
  public popup:boolean=false;
  credentials = {email: "", name: "", password: "", repeat_password: ""};

  constructor(private AuthService: AuthService, private router: Router,private  modalService: ModalService) {

    this.modalService.SignUpOpenCalled$.subscribe(
        () => {
          this.togglePopup(true);
        }
    );

    this.modalService.SignUpCloseCalled$.subscribe(
        () => {
          this.togglePopup(false);
        }
    );
  }

  togglePopup(isOpen = null){
    if(isOpen === null) isOpen = !this.popup;

    let html = document.getElementsByTagName('html')[0];

    if(isOpen) {
      this.popup = true;
      this.animationState = 'large';
      html.classList.add("no-scroll");
    } else {
      this.animationState = 'small';
      setTimeout(()=> {
        this.popup = false;
        html.classList.remove("no-scroll");
      }, 500);
    }
  }

  ngOnInit() {
  }

  onSignup() {
    this.togglePopup(false);
    if (this.credentials.password.trim().length == 0 ||
        this.credentials.email.trim().length == 0 ||
        this.credentials.name.trim().length == 0) {
      alert('All fields are required');
      return;
    }

    if (this.credentials.password !== this.credentials.repeat_password) {
      alert('Password and Confirmation do not match');
      return;
    }

    this.AuthService.signup(this.credentials)
        .subscribe(
            resp => {
              const url = sessionStorage.getItem('redirect');
              if (url) {
                sessionStorage.removeItem('redirect');
                this.router.navigateByUrl(url);
              } else {
                this.router.navigate(['/']);
              }
            },
            error => {
              if (error.status == 400) {
                alert('User with this email is already registered in the system');
              } else {
                alert(error.statusText);
              }
            }
        );
  }

}
