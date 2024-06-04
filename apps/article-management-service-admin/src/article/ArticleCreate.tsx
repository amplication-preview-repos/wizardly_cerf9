import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="published" source="published" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
