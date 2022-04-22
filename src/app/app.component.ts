import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularStyleandGraphics';
  isFavourite = false;
  showBoring = false;

  constructor(private render: Renderer2) {}

  onShowBoring(element: HTMLElement) {
    this.render.setStyle(element, 'display', 'block');
  }
}
