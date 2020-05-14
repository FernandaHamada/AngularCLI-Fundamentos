import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; //importa as diretrizes ngFor ngIf

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
    imports: [ HttpClientModule, CommonModule]
})

export class PhotosModule{}