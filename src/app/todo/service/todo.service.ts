import { inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.services";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos: Todo[] = [];
  // A partir de Angular 14
  loggerservice = inject(LoggerService);
  // constructor(private loggerservice: LoggerService) {}
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.#todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.#todos.indexOf(todo);
    if (index >= 0) {
      this.#todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerservice.logger(this.#todos);
  }
}
