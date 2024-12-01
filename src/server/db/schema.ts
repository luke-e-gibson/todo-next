import {
  bigint, bigserial,
  boolean,
  pgTableCreator,
  text,
  varchar
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

export const todos = createTable("ToDos", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  owner: varchar("owner").notNull(),
  todo: text("text").notNull(),
  done: boolean("done").notNull().default(false),

  created: bigint("created", {mode: "number"}).notNull()
})