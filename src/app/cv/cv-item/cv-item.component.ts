import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
  standalone: true,
  imports: []
})
export class CvItemComponent {
  // Qu'est ce qui représente mon état
  @Input({
    required: true
  })
  cv!: Cv;
  cvService = inject(CvService);
  // @Output()
  // selectCv = new EventEmitter<Cv>();

  /**
   * Emmettre un event pour dire qu'on a clické sur le cv
   */
  onClick() {
    // this.selectCv.emit(this.cv);
    this.cvService.selectCv(this.cv);
  }
}
