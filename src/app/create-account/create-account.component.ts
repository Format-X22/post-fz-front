import { Component, OnInit } from '@angular/core';
import { faFacebook, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
    faTelegram = faTelegram;
    faVk = faVk;
    faFacebook = faFacebook;

    constructor() {}

    ngOnInit(): void {}
}
