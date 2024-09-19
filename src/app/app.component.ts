import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngGl42425';

  constructor() {

    setTimeout(() => {
      this.title = 'GL4 FA9at'
    }, 3000);
  }
}
