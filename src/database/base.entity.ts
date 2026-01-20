import { bigint, boolean, varchar } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

export const baseEntity = {
  active: boolean().default(true).notNull(),

  createdDate: bigint("created_date", { mode: "number" })
    .notNull()
    .$defaultFn(() => Date.now()),

  createdBy: varchar("created_by", { length: 256 }).notNull(),

  updatedDate: bigint("updated_date", { mode: "number" })
    .notNull()
    .$defaultFn(() => Date.now()),

  updatedBy: varchar("updated_by", { length: 256 }),

  deletedBy: varchar("deleted_by", { length: 256 }),

  deletedDate: bigint("deleted_date", { mode: "number" }),
};

export const entityId = {
  id: varchar({ length: 255 })
    .primaryKey()
    .$defaultFn(() => uuidv4().split("-").join("").toUpperCase()),
};
