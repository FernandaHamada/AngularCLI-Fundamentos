import { Component, Input } from '@angular/core';


const CLOUD = 'http://localhost:3000/imgs/';
@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    private _url = '';

    @Input() description = ""; // aceita receber um valor atraves de sua formas declarativas, porém não aceita receber valores externos

    @Input() set url(url: string) {
        if (!url.startsWith('data')) {
            this._url = CLOUD + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}