import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";
import { TestModule } from './testModule/test.module';
import { TwoWayComponent } from "./components/two-way/two-way.component";
import { SommeComponent } from './components/somme/somme.component';
import { PereComponent } from "./components/pere/pere.component";
import { LoggerService } from './services/logger.services';
import { SayHelloService } from './services/say-hello.service';
import { TodoComponent } from './todo/todo/todo.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { appNameDependencyInjectionToken } from './dependency injection tokens/app-name.token';
import { loggerDependencyInjectionToken } from './dependency injection tokens/logger.token';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TestFormComponent } from './form/test-form/test-form.component';
import { TestObservableComponent } from "./rxjs/test-observable/test-observable.component";
import { ToastrService } from 'ngx-toastr';
import { CvComponent } from "./cv/cv/cv.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TestFormComponent, TestObservableComponent, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngGl42425';
  appName = inject(appNameDependencyInjectionToken);
  loggers = inject(loggerDependencyInjectionToken);
  toastr = inject(ToastrService);
  constructor(
    public loggerService: LoggerService,
    public sayHelloService: SayHelloService
  ) {
    this.loggerService.logger('cc GL4');
    this.sayHelloService.hello();
    this.loggers.forEach(logger => logger.logger('cc GL4'));
    this.toastr.info('Hello GL4')
    // setTimeout(() => {
    //   this.title = 'GL4 FA9at'
    // }, 3000);
  }
}
