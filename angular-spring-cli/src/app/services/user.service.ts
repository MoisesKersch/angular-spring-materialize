import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService 
{
    url = 'http://localhost:8080/user/';
    constructor(private http: HttpClient) { }

    add(user: User): Observable<User>
    {
        let result: Observable<User>;
        try {
              result = this.http.post<User>('http://localhost:8080/user', user);
        } catch (error) {
            console.log(error);
        }
        return result;
    } 

    isValidUsername(username: string): Observable<Boolean>
    {
        let result: Observable<Boolean>;

        try 
        {
              result = this.http.post<Boolean>('http://localhost:8080/isusername', username);
        } catch (error) {
            console.log(error);
        }
        return result;
    } 


    save(user: User): Observable<User> 
    {
        return this.http.post<User>(this.url, user);
    }
} 
