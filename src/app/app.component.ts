import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-shopping-app';
  link: string

  onEmit(navLink: string) {
    this.link = navLink
  }
}
