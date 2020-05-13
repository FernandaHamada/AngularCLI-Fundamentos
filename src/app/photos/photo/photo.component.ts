import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    @Input() description = ""; // aceita receber um valor atraves de sua formas declarativas, porém não aceita receber valores externos

    @Input() url = "";
}