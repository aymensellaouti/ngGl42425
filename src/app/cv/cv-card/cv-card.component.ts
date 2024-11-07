import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink]
})
export class CvCardComponent {
  @Input()
  cv: Cv | null  = null;
}
