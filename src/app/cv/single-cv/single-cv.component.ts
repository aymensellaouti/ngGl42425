import { Component, inject, signal } from '@angular/core';
import { CvItemComponent } from "../cv-item/cv-item.component";
import { Cv } from '../model/cv.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-single-cv',
  standalone: true,
  imports: [CvItemComponent, RouterLink],
  templateUrl: './single-cv.component.html',
  styleUrl: './single-cv.component.css',
})
export class SingleCvComponent {
  cv = signal<Cv | null>(null);
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {
    this.acr.params.subscribe({
      next: (params) => this.cv.set(this.cvService.findCvById(params['id'])),
      error: (e) => this.router.navigate(['cv']),
    });
  }
}
