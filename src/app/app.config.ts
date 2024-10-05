import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './services/logger.services';
import { SayHelloService } from './services/say-hello.service';
import { appNameDependencyInjectionToken } from './dependency injection tokens/app-name.token';
import { loggerDependencyInjectionToken } from './dependency injection tokens/logger.token';
import { Logger2Service } from './services/logger2.services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Rahou fama chkoun iest7a9 el provider hatha
    // asn3ou
    LoggerService,
    {
      provide: loggerDependencyInjectionToken,
      useClass: LoggerService,
      multi: true
    },
    {
      provide: loggerDependencyInjectionToken,
      useClass: Logger2Service,
      multi: true
    },
    {
      provide: appNameDependencyInjectionToken,
      useValue: 'ngGL4'
    },
    // {
    //   provide: LoggerService,
    //   useFactory: () => {
    //     // Explique kifech na3mlou el pizza bel mloukheya
    //     return new LoggerService()
    //   }
    // },
  ],
};
