import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";

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

export default function HomePage() {
  return (
    <main className="w-full h-full py-16">
      <SignedIn>
          <div className="max-w-4xl mx-auto min-h-14 border rounded py-5">
            <h1 className="text-center text-2xl py-3">Todos:</h1>
            <div className="max-w-2xl mx-auto min-h-14 flex">
              <Input type="text" className="" placeholder="What do you want to do?"/>
              <Button className="min-w-40">Add!</Button>
            </div>
            <div className="mx-auto max-w-2xl grid grid-cols-1 gap-2">
                <Todo done={false} text={"Hello"} id={444}/>
                <Todo done={true} text={"this is bob"} id={454}/>
            </div>
          </div>
      </SignedIn>
      <SignedOut>
          <h1 className="text-2xl text-center">Sign In To use this app</h1>
      </SignedOut>
    </main>
  );
}
