import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { CvItemComponent } from "../cv-item/cv-item.component";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
  standalone: true,
  imports: [NgForOf, NgClass, CvItemComponent]
})
export class CvListComponent {
  // JOB : Récupérer une liste de cvs et l'afficher
  @Input()
  cvs: Cv[] = [];
}
