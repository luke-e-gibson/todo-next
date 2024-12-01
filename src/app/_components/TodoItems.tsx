"use server"
import { getUserTodos } from "@/server/queris";
import { Todo } from "./Todo";


export async function TodoItems() {
  const todos = await getUserTodos();


  console.log(todos)
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-2">
      {todos.map((todo) => (
        <Todo done={todo.done} text={todo.todo} id={todo.id} key={todo.id}/>
      ))}
    </div>
  );
}