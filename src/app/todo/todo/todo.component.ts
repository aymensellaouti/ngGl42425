import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { FirstComponent } from "../../components/first/first.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [FormsModule, FirstComponent],
  providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  /**
   * @param : Liste des todos à ajouter
  */
 todos: Todo[] = this.todoService.getTodos();
 /**
  * @param : Le Todo à ajouter
  */
  todo = new Todo();

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }
}
