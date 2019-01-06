import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private loginUrl: string = 'http://localhost:8080/login';

    constructor(private http: HttpClient) { }

    attemptAuth(user: User): Observable<any> 
    {
        const credentials = {userName: user.userName, password: user.password};
        return this.http.post<any>(this.loginUrl, credentials);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
