"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { createToDo } from "@/server/queris";
import { trpc } from "@/lib/trpc";
import { ClerkClient } from "@clerk/backend";

function Todo({ done, text, id }: {done: boolean, text: string, id: number}) {
  return (
    <div className="border rounded border-gray-200 flex justify-between items-center space-x-2" id={String(id)}>
      <div className="flex items-center space-x-2">
        <Checkbox checked={done} className=""/>
        <label className="text-lg" htmlFor={String(id)}>{text}</label>
      </div>

      <div className="px-5 flex justify-between space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p className="sr-only">Content Menu</p>
            <MoreHorizontal/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> Todo Actions </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

function TodoIteams() {

}

export default function HomePage() {
  const [todo, setTodo] = useState("")
  const user = useUser();

  const { data } = trpc.getTodos.useQuery({ userId: "user_2pZK6TP5xLjvrevjMv8OjCDan5x" })
  console.log(data)

  async function addClick(){
    await createToDo({todo: todo})
    void setTodo("")
  }

  return (
    <main className="w-full h-full py-16">
      <SignedIn>
          <div className="max-w-4xl mx-auto min-h-14 border rounded py-5 shadow">
            <h1 className="text-center text-2xl py-3">Todos:</h1>
            <div className="max-w-2xl mx-auto min-h-14 flex">
              <Input type="text" onChange={(e)=> {setTodo(e.target.value)}} value={todo} placeholder="What do you want to do?"/>
              <Button className="min-w-40" onClick={()=> addClick()}>Add!</Button>
            </div>
            
          </div>
      </SignedIn>
      <SignedOut>
          <h1 className="text-2xl text-center">Sign In To use this app</h1>
      </SignedOut>
    </main>
  );
}
