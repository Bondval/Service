import {LoginComponent} from "../login/login.component";
import {CreateComponent} from "../create/create.component";
import {Component, HostListener, ElementRef, OnInit, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ModalService implements OnInit {
  // Observable string sources
  private LoginOpenCallSource = new Subject<any>();
  private LoginCloseCallSource = new Subject<any>();
  private SignUpOpenCallSource = new Subject<any>();
  private SignUpCloseCallSource = new Subject<any>();
  // Observable string streams
  LoginOpenCalled$ = this.LoginOpenCallSource.asObservable();
  LoginCloseCalled$ = this.LoginCloseCallSource.asObservable();
  SignUpOpenCalled$ = this.SignUpOpenCallSource.asObservable();
  SignUpCloseCalled$ = this.SignUpCloseCallSource.asObservable();
  // Service message commands

  callOpenLogin() {
    this.LoginOpenCallSource.next();
  }

  callCloseLogin() {
    this.LoginCloseCallSource.next();
  }

  callOpenSignUp() {
    this.SignUpOpenCallSource.next();
  }

  callCloseSignUp() {
    this.SignUpCloseCallSource.next();
  }

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
  }

}