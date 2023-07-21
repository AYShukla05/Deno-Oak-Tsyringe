import { Router, injectable, inject } from './deps.ts'
import { ToDoService } from './ToDo.service.ts'

// @autoInjectable()
@injectable()
export class TodoController {
    router: Router;
    todoService: ToDoService = new ToDoService();
    constructor (
    ) {
        this.router = new Router();
        this.routes();
    }

    routes() {
        this.router.get("/todos", this.todoService.getAllTodos)
        .post("/todos", this.todoService.createTodo)
        .get("/todos/:id", this.todoService.getTodoById)
        .put("/todos/:id", this.todoService.updateTodoById)
        .delete("/todos/:id", this.todoService.deleteTodoById);
    }
}