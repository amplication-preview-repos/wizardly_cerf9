import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ConfessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="faculty" source="faculty" />
        <TextInput label="SubmittedBy" source="submittedBy" />
      </SimpleForm>
    </Edit>
  );
};
