import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private userSubject = new BehaviorSubject<User>(null); // BehaviorSubject guarda o valor, até buscar o dado
    private userName: string;

    constructor(private tokenService: TokenService){

        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToke();
        const user = jwt_decode(token) as User; // decodifica o token salvo
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null); // retirar o nome do header
    }

    isLogged(){
        return this.tokenService.hasToken(); // se tiver um token está logado
    }

    getUserName(){
        return this.userName;
    }
}