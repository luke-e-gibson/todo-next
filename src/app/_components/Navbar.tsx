import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-border px-4 py-4 sm:px-6 lg:px-8 shadow">
      <SignedIn>
        <Link href="/">
          <h1 className="text-xl">Todo App</h1>
        </Link>
      </SignedIn>
      <SignedOut>
        <Link href="/">
          <h1 className="text-xl">Quiz Maker</h1>
        </Link>
      </SignedOut>

      <div className="flex items-center gap-4">
        <SignedIn>
          <Button variant="outline">Create Todo</Button>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button asChild variant="outline">
            <SignInButton/>
          </Button>
          <Button asChild>
            <SignUpButton/>
          </Button>
        </SignedOut>
      </div>
    </nav>
  )
}