import { InjectionToken } from "@angular/core";
import { LoggerInterface } from "./logger.interface";

export const loggerDependencyInjectionToken = new InjectionToken<LoggerInterface[]>(
  'loggerNameDependencyInjectionToken'
);
