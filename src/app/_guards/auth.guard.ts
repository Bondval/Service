import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import {ModalService} from "../_services/modal.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private modalService:ModalService) {
    }

    canActivate(){
        console.log(this.authService.isLoginSubject.value);
        if (this.authService.isLoginSubject.value) {
            console.log(true);
            return true;
        } else {
            this.modalService.callOpenLogin();
            console.log(false);
            return false;
        }

    }
}
