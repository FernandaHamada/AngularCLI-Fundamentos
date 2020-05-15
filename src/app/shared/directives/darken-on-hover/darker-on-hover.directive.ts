import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    

    constructor(private el: ElementRef, private render: Renderer){
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