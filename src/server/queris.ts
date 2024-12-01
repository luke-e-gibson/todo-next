"use server"

import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { todos } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function createToDo(todo: {todo: string}){
  const user = await auth();
  if(!user.userId) throw new Error("Unauthorized");

  await db.insert(todos).values({todo: todo.todo, owner: user.userId, created: Date.now()})
}

export async function getUserTodos() {
  const user = await auth();
  if(!user.userId) throw new Error("Unauthorized");

  const todos = await db.query.todos.findMany({
    where: ( todos, { eq } ) => eq(todos.owner, user.userId),
    orderBy: ( todos, {asc} ) => asc(todos.created)
  })

  return todos
}

export async function changeTodoStatus(todoId: number, status: boolean) {
  await db.update(todos).set({done: status}).where(eq(todos.id, todoId))
}

export async function deleteTodo(todoId: number){
  await db.delete(todos).where(eq(todos.id, todoId))
}