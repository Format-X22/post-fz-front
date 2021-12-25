import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
    demoChatList = [
        { name: 'Чат с админом', lastMessage: 'Привет!', unread: 4 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 38 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 199 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
        { name: 'Про знакомства', lastMessage: 'И тут я, короче подхожу к ней и беру', unread: 0 },
        { name: 'Про видеотеку', lastMessage: 'Наснимали вон чего, смотри', unread: 0 },
        { name: 'Про друзей', lastMessage: 'Вчера туда ходили, можно сегодня тоже сходить', unread: 0 },
    ];
    demoChatData = [];

    constructor() {}

    ngOnInit(): void {}
}
