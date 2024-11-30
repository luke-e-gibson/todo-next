
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { lazy, Suspense,  } from "react";
import { createToDo } from "@/server/queris";
import { trpc } from "@/lib/trpc";

import { TodoItems } from "@/app/_components/todoItems";
import { AddTodoButton } from "@/app/_components/AddToDoButton";

function TodoItemLoading() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-2">Loading</div>
  );
}

export default function HomePage() {



  return (
    <main className="h-full w-full py-16">
      <SignedIn>
        <div className="mx-auto min-h-14 max-w-4xl rounded border py-5 shadow">
          <h1 className="py-3 text-center text-2xl">Todos:</h1>
          <AddTodoButton/>
          <TodoItems />
          </div>
      </SignedIn>
      <SignedOut>
        <h1 className="text-center text-2xl">Sign In To use this app</h1>
      </SignedOut>
    </main>
  );
}
