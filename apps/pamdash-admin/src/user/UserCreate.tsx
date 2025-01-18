import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ContactInformationTitle } from "../contactInformation/ContactInformationTitle";
import { PersonalInformationTitle } from "../personalInformation/PersonalInformationTitle";
import { VerificationInformationTitle } from "../verificationInformation/VerificationInformationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contactInformation.id"
          reference="ContactInformation"
          label="contactInformation"
        >
          <SelectInput optionText={ContactInformationTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput
          source="personalInformation.id"
          reference="PersonalInformation"
          label="personalInformation"
        >
          <SelectInput optionText={PersonalInformationTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          label="signUpCredentials"
          multiline
          source="signUpCredentials"
        />
        <TextInput label="Username" source="username" />
        <ReferenceInput
          source="verificationInformation.id"
          reference="VerificationInformation"
          label="verificationInformation"
        >
          <SelectInput optionText={VerificationInformationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
