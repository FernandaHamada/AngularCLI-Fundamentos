import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({providedIn: 'root'})
export class TokenService{
    hasToken(){
        return !!this.getToke();  // true or false
    }

    setToken(token){
        window.localStorage.setItem(KEY, token);
    }

    getToke(){
        return window.localStorage.getItem(KEY);
    }

    removeToken(){
        window.localStorage.removeItem(KEY);
    }
}