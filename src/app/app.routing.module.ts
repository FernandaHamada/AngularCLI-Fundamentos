import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


//configuração de rotas
// o framework Angular interpreta essa URL e verifica se há um roteamento associado
const routes: Routes =[
    { path: 'user/:userName', component: PhotoListComponent},
    { path: 'p/add', component: PhotoFormComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{   
}