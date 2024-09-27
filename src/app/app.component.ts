import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";
import { TestModule } from './testModule/test.module';
import { TwoWayComponent } from "./components/two-way/two-way.component";
import { SommeComponent } from './components/somme/somme.component';
import { PereComponent } from "./components/pere/pere.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, TestModule, TwoWayComponent, SommeComponent, PereComponent],
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
