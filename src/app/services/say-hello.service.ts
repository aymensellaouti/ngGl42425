// Nest7a9 Injectbale loadih
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.services';
// Jib edenya el kol rani nest7a9hom
// import * as common from '@angular/common';
@Injectable({
  // Lazy loading du service Tree shaking
  providedIn: 'root'
})
export class SayHelloService {
  constructor(
    private loggerService: LoggerService
  ) { }
  hello() {
    this.loggerService.logger('Hello GL4 :D');
  }
}
