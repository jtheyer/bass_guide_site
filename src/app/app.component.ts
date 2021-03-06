import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Harbor', url: 'harbor', icon: 'home' },
    { title: 'About', url: 'about', icon: 'help' },
    { title: 'Captain\'s Log', url: 'blog', icon: 'book' },
  ];
  constructor() { }
}