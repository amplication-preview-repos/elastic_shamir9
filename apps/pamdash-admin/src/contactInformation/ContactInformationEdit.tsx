import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ContactInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lga" source="lga" />
        <TextInput label="lgaOfResidence" source="lgaOfResidence" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="residentialAddress" source="residentialAddress" />
        <TextInput label="stateOfOrigin" source="stateOfOrigin" />
        <TextInput label="stateOfResidence" source="stateOfResidence" />
        <ReferenceInput source="users.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
