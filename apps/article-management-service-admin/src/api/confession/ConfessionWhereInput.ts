import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConfessionWhereInput = {
  content?: StringNullableFilter;
  faculty?: StringNullableFilter;
  id?: StringFilter;
  submittedBy?: StringNullableFilter;
};
