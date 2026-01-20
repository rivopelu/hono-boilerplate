import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";
import { baseEntity, entityId } from "../database/base.entity";

export const AccountEntity = pgTable("account", {
  ...entityId,
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  ...baseEntity,
});

export type Account = InferSelectModel<typeof AccountEntity>;
export type NewAccount = InferInsertModel<typeof AccountEntity>;
