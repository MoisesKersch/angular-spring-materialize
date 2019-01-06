import { Component, OnInit, ViewEncapsulation, NgZone   } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Validator } from './../../shared/validator';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    loginForm: any;

    constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        document.getElementById('page-center').setAttribute('href', '../../assets/materialize-assets/layouts-css/page-center.css');
        body.classList.add('cyan');

        this.loginForm = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    markAllAsTouched(group: any) {
        Object.keys(group.controls).forEach(key => {
            group.controls[key].touched = true;
        });
    }

    login(loginForm): void {
        this.markAllAsTouched(loginForm);

        if (loginForm.valid) {
            this.authService.attemptAuth(loginForm.value).
                subscribe(
                    data => {
                        this.router.navigate(['/home']);
                    }
                );

            loginForm.reset();
        }
    }

}
