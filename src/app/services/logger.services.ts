import { Injectable } from "@angular/core";

// wafarna khedma jdida
// @Injectable()
export class LoggerService {

  logger(message: unknown): void {
    console.log('From Logger');
    console.log({message});
  }
}
