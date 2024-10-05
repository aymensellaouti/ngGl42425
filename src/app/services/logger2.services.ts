import { Injectable } from "@angular/core";

// wafarna khedma jdida
// @Injectable()
export class Logger2Service {

  logger(message: unknown): void {
    console.log('From Logger 2');
    console.log({message});
  }
}
