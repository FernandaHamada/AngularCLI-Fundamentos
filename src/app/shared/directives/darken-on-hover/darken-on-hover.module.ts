import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darker-on-hover.directive';

@NgModule({
    declarations:[DarkenOnHoverDirective],
    exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule{}