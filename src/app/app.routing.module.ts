import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';



//configuração de rotas
// o framework Angular interpreta essa URL e verifica se há um roteamento associado
const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full', // extamente igual a rota
        redirectTo: 'home'
    }, 
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    { 
        path: 'user/:userName', 
        component: PhotoListComponent, 
        resolve: 
        { 
            photos: PhotoListResolver 
        },
        data: {
            title: 'Timeline'
        } 
    },
    { 
        path: 'p/add', 
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'photo upload'
        }
    },
    {
        path: 'p/:photoId', 
        component: PhotoDetailsComponent,
        data: {
            title: 'photo detail'
        }

    },
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: 'not found'
        }
    },
    { 
        path: '**', 
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}