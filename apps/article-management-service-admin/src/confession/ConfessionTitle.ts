import { Confession as TConfession } from "../api/confession/Confession";

export const CONFESSION_TITLE_FIELD = "faculty";

export const ConfessionTitle = (record: TConfession): string => {
  return record.faculty?.toString() || String(record.id);
};
