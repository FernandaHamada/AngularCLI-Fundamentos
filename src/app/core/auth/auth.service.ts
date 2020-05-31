import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
import { UserService } from '../user/user.service';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root' // única instancia
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

    authenticate(userName: string, password: string){
      return this.http.post(API + '/user/login', {userName: userName, password: password}, { observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`);
      }));

    }
  
}


