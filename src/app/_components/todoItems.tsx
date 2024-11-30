"use server"
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react"
import { auth } from "@clerk/nextjs/server";
import { getUserTodos } from "@/server/queris";


export async function TodoItems() {
  const todos = await getUserTodos();

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-2">
      {todos.map((todo) => (
        <Todo done={todo.done} text={todo.todo} id={todo.id} key={todo.id}/>
      ))}
    </div>
  );
}
function Todo({ done, text, id }: { done: boolean; text: string; id: number }) {
  return (
    <div
      className="flex items-center justify-between space-x-2 rounded border border-gray-200"
      id={String(id)}
    >
      <div className="flex items-center space-x-2 px-2">
        <Checkbox checked={done} className="" />
        <label className="text-lg" htmlFor={String(id)}>
          {text}
        </label>
      </div>

      <div className="flex justify-between space-x-2 px-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p className="sr-only">Content Menu</p>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> Todo Actions </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}