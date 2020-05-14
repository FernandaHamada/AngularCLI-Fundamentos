import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'}) // PhotoService é injetável, escopo raiz
export class PhotoService{

    
    constructor(private http: HttpClient){}

    listFromUser(userName: string){

        return this.http.get<Photo[]>(API + "/flavio/photos");
        
    }
}