import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logImage($event: string) {
    console.log($event);
  }
  name = 'blog';
  imageUrl: string = '';

  changeImage(e: Event) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }
}
