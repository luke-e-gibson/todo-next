"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createToDo } from "@/server/queris";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AddTodoButton() {
  const [text, setText] = useState("");
  const router = useRouter();

  async function addTodo() {
    await createToDo({todo: text})
    void router.refresh();
    void setText("");
  }

  return (
    <div className="mx-auto flex min-h-14 max-w-2xl">
      <Input type="text" placeholder="What do you want to do?" onChange={(e) => setText(e.target.value)} value={text} />
      <Button className="min-w-40" onClick={()=>  addTodo()}>Add!</Button>
    </div>
  );
}
