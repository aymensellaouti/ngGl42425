import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css',
})
export class TestObservableComponent {
  toast = inject(ToastrService);
  observable$ = new Observable<number>((observer) => {
    let i = 5;
    const intervalIndex = setInterval(() => {
      if (!i) {
        observer.complete();
        clearInterval(intervalIndex);
      }
      observer.next(i--);
    }, 1000);
  });

  constructor() {
    this.observable$.subscribe((val) => {
      console.log(val);
    });
    // setTimeout(() => {
      this.observable$
      // 5 4 3 2 1
      .pipe(
        map( x => x * 3),
        // 15 12 9 6 3
        filter( x => ! (x%2))
        // 12 6
      )
      // flux resultat
      .subscribe((val) => {
        this.toast.info('' + val)
      });
    // }, 3000);
  }
}
