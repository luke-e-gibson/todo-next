import { z } from 'zod';
import { procedure, router } from '../index';
import { db } from "@/server/db";
export const appRouter = router({
  getTodos: procedure.input(z.object({ userId: z.string() })).query(async (opts)=> {
      const todos = await db.query.todos.findMany({
        where: ( todos, { eq } ) => eq(todos.owner, opts.input.userId),
        orderBy: ( todos, {asc} ) => asc(todos.created)
      })
    console.log(todos)
    return todos
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;