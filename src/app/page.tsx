import { SignedIn, SignedOut } from "@clerk/nextjs";
import { TodoItems } from "@/app/_components/TodoItems";
import { AddTodoButton } from "@/app/_components/AddTodoButton";
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
