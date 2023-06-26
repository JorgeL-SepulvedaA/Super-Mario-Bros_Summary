import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Cover', url: '/cover', icon: 'book' },
    { title: 'Characters', url: '/characters', icon: 'at' },
    { title: 'Best Moment', url: '/best-moments', icon: 'star' },
    { title: 'About', url: '/about', icon: 'heart' },
    { title: 'Feedback', url: '/feedback', icon: 'paper-plane' },
    { title: 'Contact Me', url: '/contact-me', icon: 'mail' },
  ];
  constructor() {}
}
