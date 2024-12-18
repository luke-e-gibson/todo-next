"use client"

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { changeTodoStatus, deleteTodo } from "@/server/queris";
import { useRouter } from "next/navigation";


export function Todo({ done, text, id }: { done: boolean; text: string; id: number }) {
  const [checked, setChecked] = useState(done);
  const router = useRouter();
  async function handleToggle() {
    setChecked(!checked)
    await changeTodoStatus(id, !checked);
  }

  async function handleDelete() {
    await deleteTodo(id)
    void router.refresh()
  }

  return (
    <div className="flex items-center justify-between space-x-2 rounded border border-gray-200" id={String(id)}>
      <div className="flex items-center space-x-2 px-2">
        <Checkbox checked={checked} onClick={()=> handleToggle()} className="" />
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
            <DropdownMenuItem onClick={()=> handleDelete()}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}