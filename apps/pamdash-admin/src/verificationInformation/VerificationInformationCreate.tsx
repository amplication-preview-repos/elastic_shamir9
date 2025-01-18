import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const VerificationInformationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cacDocument" source="cacDocument" />
        <TextInput
          label="countryOfIncorporation"
          source="countryOfIncorporation"
        />
        <TextInput label="currentOccupation" source="currentOccupation" />
        <DateTimeInput label="dateOfExpiry" source="dateOfExpiry" />
        <DateTimeInput label="dateOfIssue" source="dateOfIssue" />
        <TextInput
          label="identificationDocument"
          source="identificationDocument"
        />
        <TextInput label="identificationNumber" source="identificationNumber" />
        <TextInput label="organisationAddress" source="organisationAddress" />
        <TextInput label="organisationName" source="organisationName" />
        <TextInput label="placeOfIssue" source="placeOfIssue" />
        <TextInput label="position" source="position" />
        <TextInput label="registrationNumber" source="registrationNumber" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
