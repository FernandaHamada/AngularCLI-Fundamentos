import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Component({  //decorator
  selector: 'app-root', // permite utilizar o componente e template, em sua forma declarativa
  templateUrl: './app.component.html', // apresentação desse componente
  styleUrls: ['./app.component.css'] // local onde fica o CSS
})
export class AppComponent implements OnInit { // só é um componente pq está anotado com um @Component

  constructor(private activedRoute: ActivatedRoute, private titleService: Title, private router: Router){}
  
  
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activedRoute)).pipe(map(route => {
          while(route.firstChild) route = route.firstChild;
          return route;
      }))
      .pipe(switchMap(route => route.data)).subscribe(event => this.titleService.setTitle(event.title));
  }

  //Uma instância de Router possui a propriedade events, um Observable que nos permite saber a fase atual 
  // da rota acessada pela aplicação

  // Um evento do tipo NavigationEnd é aquele disparado quando a rota termina com sucesso

}
