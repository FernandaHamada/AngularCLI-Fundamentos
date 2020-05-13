import { Component } from '@angular/core';

@Component({  //decorator
  selector: 'app-root', // permite utilizar o componente e template, em sua forma declarativa
  templateUrl: './app.component.html', // apresentação desse componente
  styleUrls: ['./app.component.css'] // local onde fica o CSS
})
export class AppComponent { // só é um componente pq está anotado com um @Component

  title = 'alurapic'; //Data binding
  description = "Leão";
  url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg"
}
