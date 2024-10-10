import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css'
})
export class TestObservableComponent {
  observable$ = new Observable(
    (observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }      observer.next(i--);    }, 1000);  });

  constructor() {
    this.observable$.subscribe((val) => {
      console.log(val);
    });
    setTimeout(() => {
        this.observable$.subscribe((val) => {
          console.log('subscriber 2 ' + val);
        });
    }, 3000)

  }
}
