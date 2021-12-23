import { Component, OnInit } from '@angular/core';
import { faFacebook, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
    faTelegram = faTelegram;
    faVk = faVk;
    faFacebook = faFacebook;

    constructor() {}

    ngOnInit(): void {}
}
