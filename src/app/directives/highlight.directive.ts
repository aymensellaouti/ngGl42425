import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = 'green';
  @Input() in = 'yellow';
  @HostBinding('style.backgroundColor') bgc = this.appHighlight;
  constructor() { }

  ngOnInit() {
    this.bgc = this.appHighlight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.appHighlight;
  }

}
