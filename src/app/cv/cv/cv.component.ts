import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { CvService } from '../service/cv.service';
import { AsyncPipe } from '@angular/common';
import { distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone: true,
  imports: [CvListComponent, CvCardComponent, AsyncPipe]
})
export class CvComponent {
  // Je suis le smart component je suis le boss je réfléchi
  // Je dois tout d'abord fournir la liste des cvs
  /**
   * La liste des cvs à afficher
   */
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      'as.jpg',
      '1234',
      42
    ),
    new Cv(
      2,
      'Lharras',
      'Yousra',
      'Dev',
      'rotating_card_profile.png',
      '12345',
      20
    ),
    new Cv(
      3,
      'Sainnier',
      'Sylvain',
      'Dev',
      'rotating_card_profile3.png',
      '123456',
      22
    ),
    new Cv(
      4,
      'Fouhety',
      'Kevin',
      'Dev',
      'rotating_card_profile2.png',
      '123456',
      22
    ),
    new Cv(
      5,
      'Medmad',
      'Safae',
      'Dev',
      'rotating_card_profile.png',
      '123456',
      22
    ),
  ];

  /**
   * Le cv sélectionné
   */
  cvService = inject(CvService);
  selectedCv$ = this.cvService.
  selectedCv$.pipe(
    // selectedCv
    filter(cv => cv.age > 20),
    //  sortie flux eli 9abli
    distinctUntilChanged()
  )
  constructor() {
    // rani 9ayedet fel flux des cvs selectionnés
    // w kol ma iji cv jdid naffectih lel selectedCv
    // this.cvService.selectedCv$.subscribe(
    //   cv => this.selectedCv = cv
    // )
  }
}
