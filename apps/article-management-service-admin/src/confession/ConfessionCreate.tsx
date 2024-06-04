import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ConfessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="faculty" source="faculty" />
        <TextInput label="SubmittedBy" source="submittedBy" />
      </SimpleForm>
    </Create>
  );
};
