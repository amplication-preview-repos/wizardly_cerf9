import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
