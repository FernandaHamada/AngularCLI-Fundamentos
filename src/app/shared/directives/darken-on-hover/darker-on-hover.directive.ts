import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    

    constructor(private el: ElementRef, private render: Renderer){ //manipulação do DOM por meio do Renderer, que nos blinda de termos que trabalhar no DOM
    }

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%');
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%');
    }
}

//@Directive não está atrelado a um template igual ao @Component