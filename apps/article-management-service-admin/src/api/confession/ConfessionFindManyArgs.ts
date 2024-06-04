import { ConfessionWhereInput } from "./ConfessionWhereInput";
import { ConfessionOrderByInput } from "./ConfessionOrderByInput";

export type ConfessionFindManyArgs = {
  where?: ConfessionWhereInput;
  orderBy?: Array<ConfessionOrderByInput>;
  skip?: number;
  take?: number;
};
