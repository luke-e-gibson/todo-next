// app/api/trpc/[trpc]/route.ts
import { appRouter } from "@/server/trpc/routes/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
  });
};

export { handler as GET, handler as POST };
