// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint, bigserial,
  boolean,
  index,
  integer,
  pgTableCreator,
  serial, text,
  timestamp,
  varchar
} from "drizzle-orm/pg-core";
import * as module from "node:module";

export const createTable = pgTableCreator((name) => `${name}`);


export const todos = createTable("ToDos", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  owner: varchar("owner").notNull(),
  todo: text("text").notNull(),
  done: boolean("done").notNull().default(false),

  created: bigint("created", {mode: "number"}).notNull()
})