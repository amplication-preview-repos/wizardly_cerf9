import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ArticleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="published" source="published" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
