import {Component, OnInit, Output, Input, EventEmitter,} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../_services/http.service';
import { AlertService } from '../_services/index';
import 'rxjs/add/operator/catch';
import {HttpClient,HttpHandler} from "@angular/common/http";
import {AuthService} from "../_services/auth.service";
import {ModalService} from "../_services/modal.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-create.component.scss'],
  providers: [HttpService],
  exportAs: 'appLogin',
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
})

export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;
  public show : boolean;
  public animationState: string = 'small';
  public popup : boolean = false;
  public modalState : string = 'login';
  credentials = {username: '', password: '', email:'', remember_me: false};

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
        this.modalState = 'login';
      }, 500);
    }
  }

  setState(state){
    this.modalState = state;
  }

  constructor(private AuthService: AuthService, private router: Router, private  modalService: ModalService) {

    this.modalService.LoginOpenCalled$.subscribe(
        () => {
          this.togglePopup(true);
        }
    );

    this.modalService.LoginCloseCalled$.subscribe(
        () => {
          this.togglePopup(false);
        }
    );
  }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/workspace/customer/profile';
  }

  onLogin() {
    this.togglePopup(false);
    let subs = this.AuthService.login(this.credentials.email, this.credentials.password, this.credentials.remember_me)
        .subscribe(
            resp => {
              if(resp) {
                subs.unsubscribe();
                const url = sessionStorage.getItem('redirect');
                if (url) {
                  sessionStorage.removeItem('redirect');
                  this.router.navigateByUrl(url);
                } else {
                  this.router.navigate(['/workspace/customer/profile']);
                }
              }
            },
            error => {
              subs.unsubscribe();
              if(error.status == 401) {
                alert('Incorrect credentials');
              } else {
                alert(error.statusText);
              }

            }
        );
  }
}
