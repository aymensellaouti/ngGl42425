import { Component, inject, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css',
})
export class TestObservableComponent implements OnDestroy{
  toast = inject(ToastrService);
  subscription = new Subscription();
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
    this.subscription.add(this.observable$.subscribe((val) => {
      console.log(val);
    }));
    // setTimeout(() => {
     this.subscription.add( this.observable$
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
      }));
    // }, 3000);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
