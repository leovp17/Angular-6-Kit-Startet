import { Component, OnInit } from '@angular/core';

import '../assets/styles/main.scss';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'App';
    ngOnInit() {
        console.log('welcome to my app!');
    }
}
