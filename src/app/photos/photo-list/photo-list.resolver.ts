import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
        const userName = route.params.userName;

        return this.service.listFromUserPaginated(userName, 1);
    }
}

//a resolução de dados assíncronos dos quais o componente depende antes de ser ativado, no momento em que ativamos a rota, antes mesmo dela avaliar tal componente