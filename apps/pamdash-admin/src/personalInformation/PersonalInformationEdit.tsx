import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const PersonalInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="firstName" source="firstName" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="middleName" source="middleName" />
        <TextInput label="nin" source="nin" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
