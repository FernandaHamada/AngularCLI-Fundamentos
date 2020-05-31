import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[showIfLogged]' //vai ser um atributo
})
export class ShowIfLoggedDirective implements OnInit{
    

    //renderer: Renderer blinda de manipular o DOM
    //Muito útil quando estamos renderizando a aplicação no lado do server, por exemplo, através do Angular Universal.
    constructor(
        private element: ElementRef<any>, 
        private renderer: Renderer, 
        private userService: UserService){

    }

    ngOnInit(): void {
       !this.userService.isLogged() && this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
}