import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService 
{
    url = 'http://localhost:8080/register';
    
    constructor(private http: HttpClient) { }

    save(user: User): Observable<User> 
    {
        return this.http.post<User>(this.url, user);
    }
} 
