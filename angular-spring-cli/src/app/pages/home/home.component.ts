import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        document.getElementById('page-center').removeAttribute('href');
        body.classList.remove('cyan');

    }

    ngAfterViewInit(): void {
    crop();
  }

}
