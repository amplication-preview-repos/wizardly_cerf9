import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConfessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Confessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="faculty" source="faculty" />
        <TextField label="ID" source="id" />
        <TextField label="SubmittedBy" source="submittedBy" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
