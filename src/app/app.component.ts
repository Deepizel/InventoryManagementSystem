import { Component } from '@angular/core';
declare function responsive(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'InventorySys';
  constructor() {
    responsive();
  }
}
