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
  cvService = inject(CvService);
  // Je suis le smart component je suis le boss je réfléchi
  // Je dois tout d'abord fournir la liste des cvs
  /**
   * La liste des cvs à afficher
   */
  cvs: Cv[] = this.cvService.getCvs();

  /**
   * Le cv sélectionné
   */
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
