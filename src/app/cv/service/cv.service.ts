import { Injectable } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  // Bech iwali 3ana un flux de cv
  // cv1 cv3 cv4 cv10 cv1
  #selectedCv$ = new Subject<Cv>();

  /**
   * Représente le flux des cvs selectionnés
   */
  selectedCv$ = this.#selectedCv$.asObservable()
  .pipe(
    distinctUntilChanged()
  );
  constructor() { }
  // Tzid cv fel flux des cvs
  selectCv(cv: Cv): void {
    this.#selectedCv$.next(cv);
  }
}
