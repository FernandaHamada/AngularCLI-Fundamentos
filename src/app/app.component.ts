import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';


@Component({  //decorator
  selector: 'app-root', // permite utilizar o componente e template, em sua forma declarativa
  templateUrl: './app.component.html', // apresentação desse componente
  styleUrls: ['./app.component.css'] // local onde fica o CSS
})
export class AppComponent implements OnInit { // só é um componente pq está anotado com um @Component

  photos: any[] = [];

  constructor(private photoService: PhotoService) {

  }
  ngOnInit(): void {
    this.photoService.listFromUser("flavio")
      .subscribe(photos =>
        this.photos = photos);
  }


}
