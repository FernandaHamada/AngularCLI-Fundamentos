import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];
  constructor() { }

  //esse método recebe como parâmetros todas as possíveis mudanças das inbound properties do componente.
  ngOnChanges(changes: SimpleChanges){ // atráves da SimpleChanges que tem informações sobre as mudanças ocorridas nas inbound properties do component
    if(changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}

